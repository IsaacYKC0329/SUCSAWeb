let eduPie = echarts.init(document.getElementById('edu'));
let eduText = document.getElementById('edu-text')

eduPie.setOption({
    series : [
        {
            name: '学历',
            type: 'pie',    // 设置图表类型为饼图
            radius: '70%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            color: ['lightblue','blue','darkblue'],
            data:[          // 数据数组，name 为数据项名称，value 为数据项值
                {value:35, name:'本科'},
                {value:55, name:'硕士研究生'},
                {value:10, name:'博士'},
            ],
            label:{
                show:false
            }
        }
    ]
})

eduPie.on('mousemove',function (params) {
    let clickedData = params.data;


    if(clickedData.name == "硕士研究生"){
        eduText.innerText = "学历-"+clickedData.name+"："+clickedData.value+"%"
        eduText.style.visibility = "visible"
    }else if(clickedData.name == "本科"){
        eduText.innerText = "学历-"+clickedData.name+"："+clickedData.value+"%"
        eduText.style.visibility = "visible"
    }else if(clickedData.name == "博士"){
        eduText.innerText = "学历-"+clickedData.name+"："+clickedData.value+"%"
        eduText.style.visibility = "visible"
    }
})

eduPie.on('mouseout',function (params) {
    let clickedData = params.data;
    if(clickedData.name == "本科"){
        eduText.style.visibility = "hidden"
    }else if(clickedData.name == "硕士研究生"){
        eduText.style.visibility = "hidden"
    }else if(clickedData.name == "博士"){
        eduText.style.visibility = "hidden"
    }
})



let facultyPie = echarts.init(document.getElementById('faculty'));
let facultyText = document.getElementById('faculty-text')

facultyPie.setOption({
    series : [
        {
            name: 'faculty',
            type: 'pie',    // 设置图表类型为饼图
            radius: '70%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            color: ['lightblue','blue','darkblue',"brown","grey","darkgrey","black","darkgreen"],
            data:[          // 数据数组，name 为数据项名称，value 为数据项值
                {value:13, name:'工程学院'},
                {value:25, name:'商学院'},
                {value:11, name:'理学院'},
                {value:21, name:'人文社科学院'},
                {value:6, name:'建筑设计规划学院'},
                {value:12, name:'健康医学院'},
                {value:11, name:'法学院'},
                {value:1, name:'音乐学院'},
            ],
            label:{
                show:false
            }
        }
    ]
})

facultyPie.on('mousemove',function (params) {
    let clickedData = params.data;
    if(clickedData.name == "工程学院"){
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "商学院"){
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "理学院"){
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "人文社科学院"){
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "建筑设计规划学院"){
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "健康医学院"){
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "法学院"){
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "音乐学院"){
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }
})

facultyPie.on('mouseout',function (params) {
    let clickedData = params.data;
    if(clickedData.name == "工程学院"){
        facultyText.style.visibility = "hidden"
    }else if(clickedData.name == "商学院"){
        facultyText.style.visibility = "hidden"
    }else if(clickedData.name == "理学院"){
        facultyText.style.visibility = "hidden"
    }else if(clickedData.name == "人文社科学院"){
        facultyText.style.visibility = "hidden"
    }else if(clickedData.name == "建筑设计规划学院"){
        facultyText.style.visibility = "hidden"
    }else if(clickedData.name == "健康医学院"){
        facultyText.style.visibility = "hidden"
    }else if(clickedData.name == "法学院"){
        facultyText.style.visibility = "hidden"
    }else if(clickedData.name == "音乐学院"){
        facultyText.style.visibility = "hidden"
    }
})




let industryPie = echarts.init(document.getElementById('industry'));
let industryText = document.getElementById('industry-text')

industryPie.setOption({
    series : [
        {
            name: 'industry',
            type: 'pie',    // 设置图表类型为饼图
            radius: '70%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            color: ['lightblue','blue','darkblue','red','pink','yellow'],
            data:[          // 数据数组，name 为数据项名称，value 为数据项值
                {value:10, name:'高等教育'},
                {value:8, name:'研究'},
                {value:15, name:'医院和医疗保健'},
                {value:25, name:'金融服务'},
                {value:15, name:'信息技术服务'},
                {value:27, name:'其他'},

            ],
            label:{
                show:false
            }
        }
    ]
})

industryPie.on('mousemove',function (params) {
    let clickedData = params.data;

    if(clickedData.name == "高等教育"){
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }else if(clickedData.name == "研究"){
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }else if(clickedData.name == "医院和医疗保健"){
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }else if(clickedData.name == "金融服务"){
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }else if(clickedData.name == "信息技术服务"){
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }else if(clickedData.name == "其他"){
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }
})

industryPie.on('mouseout',function (params) {
    let clickedData = params.data;

    if(clickedData.name == "高等教育"){
        industryText.style.visibility = "hidden"
    }else if(clickedData.name == "研究"){
        industryText.style.visibility = "hidden"
    }else if(clickedData.name == "医院和医疗保健"){
        industryText.style.visibility = "hidden"
    }else if(clickedData.name == "金融服务"){
        industryText.style.visibility = "hidden"
    }else if(clickedData.name == "信息技术服务"){
        industryText.style.visibility = "hidden"
    }else if(clickedData.name == "其他"){
        industryText.style.visibility = "hidden"
    }
})






let functionPie = echarts.init(document.getElementById('function'));
let functionText = document.getElementById('function-text')

functionPie.setOption({
    series : [
        {
            name: 'function',
            type: 'pie',    // 设置图表类型为饼图
            radius: '70%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            color: ['brown','blue','black','yellow','green','red'],
            data:[          // 数据数组，name 为数据项名称，value 为数据项值
                {value:15, name:'运营'},
                {value:10, name:'教育'},
                {value:8, name:'医疗保健服务'},
                {value:10, name:'研究'},
                {value:42, name:'其他'},
                {value:15, name:'工程'}
            ],
            label:{
                show:false
            }
        }
    ]
})

functionPie.on('mousemove',function (params) {
    let clickedData = params.data;

    if(clickedData.name == "运营"){
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }else if(clickedData.name == "教育"){
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }else if(clickedData.name == "医疗保健服务"){
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }else if(clickedData.name == "研究"){
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }else if(clickedData.name == "其他"){
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }else if(clickedData.name == "工程"){
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }
})

functionPie.on('mouseout',function (params) {
    let clickedData = params.data;
    if(clickedData.name == "运营"){
        functionText.style.visibility = "hidden"
    }else if(clickedData.name == "教育"){
        functionText.style.visibility = "hidden"
    }else if(clickedData.name == "医疗保健服务"){
        functionText.style.visibility = "hidden"
    }else if(clickedData.name == "研究"){
        functionText.style.visibility = "hidden"
    }else if(clickedData.name == "其他"){
        functionText.style.visibility = "hidden"
    }else if(clickedData.name == "工程"){
        functionText.style.visibility = "hidden"
    }
})
