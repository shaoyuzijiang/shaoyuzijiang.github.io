function CascadeMenu(elem,data){
    
    this.eInput = elem;

    this.eInput.setAttribute('readonly',true);
    this.eInput.placeholder = '请选择';
    //获取文本框父元素
    let eInputParent = this.eInput.parentNode;
    this.eCascade = document.createElement('div');
    this.eCascade.className = 'cascade_container';
    this.eCascadeInto = document.createElement('div');
    this.eCascadeInto.className = 'cascade_into';
    this.eCascadeInto.style.display = 'none';
    this.eCascade.appendChild(this.eInput);
    this.eCascade.appendChild(this.eCascadeInto);
    eInputParent.appendChild(this.eCascade);
    this.aData = data;
    this.aSelected = [];
    this.bShow = false;
  
    this.eInput.addEventListener('click',()=>{
      if(this.bShow){ 
        this.eCascadeInto.style.display = 'none';
        this.bShow = false;
        document.onclick = null;
      }else{
        //显示级联菜单元素
        this.eCascadeInto.style.display = 'block';
        //保存已选择的菜单数据
        this.aSelected = this.eInput.value.split('-');
        //生成级联菜单
        this.generateMenu();
        document.onclick = () => {
          //隐藏菜单
          this.eCascadeInto.style.display = 'none';
          //修改菜单打开状态
          this.bShow = false;
          //取消document上的事件
          document.onclick = null;
        }
      }
    });
    //阻止冒泡
    this.eCascade.addEventListener('click',(event)=>{
      event.stopPropagation();
    });
  
    //利用事件委托选择菜单
    this.eCascadeInto.addEventListener('click',(event)=>{
      let eTarget = event.target;
      //获取选择的级别
      let po = +eTarget.dataset.po;
      this.aSelected.splice(po+1,this.aSelected.length-(po+1));
      this.aSelected[po] = eTarget.innerHTML;
      if(eTarget.className.indexOf('child')==-1){ //没有子菜单直接选择
        this.eInput.value = this.aSelected.join('-');
        this.eCascadeInto.style.display = 'none';
        this.bShow = false;
      }else{  //有子菜单显示下一级
        //重新生成DOM元素，数组中增加空字符串用于显示下一级
        this.aSelected.push('')
        //重新生成级联菜单
        this.generateMenu();
      }    
    });
  }

  //根据数据生成级联菜单
  CascadeMenu.prototype.generateMenu = function(){
    //在fnCreatHTML调用实例对象需要声明一个变量指向this
    var _self = this;
    //因为不确定子菜单有多少组，所以需要声明一个函数来递归调用
    //data:传入数据，step:当前级别
    function fnCreatHTML(data,step){
      //用于存储子菜单数据
      var aChildArr = null;
      //生成菜单DOM的字符串
      var sHTML = '<ul>';
      //循环数据
      for(let i=0;i<data.length;i++){
        //判断如果有子菜单，添加child的class，用于显示菜单右侧箭头
        if(data[i].child){
          //判断是否是当前选择，如果是，加上cur class，并且存储子菜单数据
          if(data[i].name==_self.aSelected[step]){
            aChildArr = data[i].child;
            sHTML += '<li class="child cur" data-po="'+step+'">';
          }else{
            sHTML += '<li class="child" data-po="'+step+'">';
          }
        }else{  
        
          sHTML += data[i].name == _self.aSelected[step]?
                                    '<li class="cur" data-po="'+step+'">':
                                    '<li data-po="'+step+'">';
        }
        
        sHTML += data[i].name;
        
        sHTML += '</li>';
      }
      sHTML += '</ul>';
      //如果已选择多个菜单，递归调用函数，生成子菜单
      if(_self.aSelected.length>step+1){
        sHTML += fnCreatHTML(aChildArr,step+1);
      }
      return sHTML;
    }
    this.eCascadeInto.innerHTML = fnCreatHTML(this.aData,0);
  }

  var json = [
    {
      "name":"北京市","id":"110000","child":[
        {"name":"双一流大学","id":"110100","child":[
          {"name":"北京大学","id":"110101","child":null},{"name":"清华大学","id":"110102","child":null},{"name":"中国人民大学","id":"110105","child":null},{"name":"中国地质大学","id":"110106","child":null},{"name":"北京理工大学","id":"110107","child":null},{"name":"中国农业大学","id":"110119","child":null}]
        },
        {"name":"家里蹲大学","id":"110000","child":null}
      ]
    },
    {
        "name":"天津市","id":"110000","child":[
            {"name":"一流大学","id":"110100","child":[
              {"name":"天津大学","id":"110101","child":null},{"name":"南开大学","id":"110102","child":null},{"name":"中国民航大学","id":"110105","child":null},{"name":"天津财金大学","id":"110106","child":null},{"name":"天津理工大学","id":"110107","child":null},{"name":"天津农业大学","id":"110119","child":null}]
            },
            {"name":"哈佛大学","id":"110000","child":null}
          ]
    }
  ];
  
  var eText = document.getElementById('school');
  new CascadeMenu(eText,json);
  