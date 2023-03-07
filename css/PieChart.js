let eduPie = echarts.init(document.getElementById('edu'));
let eduText = document.getElementById('edu-text')

eduPie.setOption({
    series : [
        {
            name: '学历',
            type: 'pie',    // 设置图表类型为饼图
            radius: '70%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            color: ['#1E2B69','#0079C5','#A2E2FF'],
            data:[          // 数据数组，name 为数据项名称，value 为数据项值
                {value:35, name:'本科'},
                {value:55, name:'硕士研究生'},
                {value:10, name:'博士'},
            ],
            label:{
                // show:false
            }
        }
    ]
})

eduPie.on('mousemove',function (params) {
    let clickedData = params.data;


    if(clickedData.name == "硕士研究生"){
        eduText.style.width = 20+"%"
        eduText.style.top = 270+"%"
        eduText.style.left = 3+"%"
        eduText.innerText = "学历-"+clickedData.name+"："+clickedData.value+"%"
        eduText.style.visibility = "visible"
    }else if(clickedData.name == "本科"){
        eduText.style.top = 256+"%"
        eduText.style.left = 45+"%"
        eduText.innerText = "学历-"+clickedData.name+"："+clickedData.value+"%"
        eduText.style.visibility = "visible"
    }else if(clickedData.name == "博士"){
        eduText.style.top = 238+"%"
        eduText.style.left = 15+"%"
        eduText.innerText = "学历-"+clickedData.name+"："+clickedData.value+"%"
        eduText.style.visibility = "visible"
    }
})

eduPie.on('mouseout',function (params) {
    let clickedData = params.data;
    if(clickedData.name == "本科"){
        eduText.style.visibility = "hidden"
    }else if(clickedData.name == "硕士研究生"){
        eduText.style.width = 15+"%"
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
            color: ['#1E2B69','#00458B',"#0061AA","#0079C5","#358CC8","#6BB7E4","#A2E2FF","#C1F2FF"],
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
                // show:false
            }
        }
    ]
})

facultyPie.on('mousemove',function (params) {
    let clickedData = params.data;
    if(clickedData.name == "工程学院"){
        facultyText.style.top = 240+"%"
        facultyText.style.left = 78+"%"
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "商学院"){
        facultyText.style.top = 255+"%"
        facultyText.style.left = 84+"%"
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "理学院"){
        facultyText.style.top = 278+"%"
        facultyText.style.left = 78+"%"
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "人文社科学院"){
        facultyText.style.top = 278+"%"
        facultyText.style.left = 45+"%"
        facultyText.style.width = 20+"%"
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "建筑设计规划学院"){
        facultyText.style.top = 269+"%"
        facultyText.style.left = 43+"%"
        facultyText.style.width = 20+"%"
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "健康医学院"){
        facultyText.style.top = 250+"%"
        facultyText.style.left = 46+"%"
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "法学院"){
        facultyText.style.top = 240+"%"
        facultyText.style.left = 50+"%"
        facultyText.innerText = "院系-"+clickedData.name+"："+clickedData.value+"%"
        facultyText.style.visibility = "visible"
    }else if(clickedData.name == "音乐学院"){
        facultyText.style.top = 237+"%"
        facultyText.style.left = 53+"%"
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
        facultyText.style.width = 15+"%"
        facultyText.style.visibility = "hidden"
    }else if(clickedData.name == "建筑设计规划学院"){
        facultyText.style.width = 15+"%"
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
            color: ['#1E2B69','#00458B',"#0079C5","#6BB7E4","#A2E2FF","#C1F2FF"],
            data:[          // 数据数组，name 为数据项名称，value 为数据项值
                {value:10, name:'高等教育'},
                {value:8, name:'研究'},
                {value:15, name:'医院和医疗保健'},
                {value:25, name:'金融服务'},
                {value:15, name:'信息技术服务'},
                {value:27, name:'其他'},

            ],
            label:{
                // show:false
            }
        }
    ]
})

industryPie.on('mousemove',function (params) {
    let clickedData = params.data;

    if(clickedData.name == "高等教育"){
        industryText.style.top = 290+"%"
        industryText.style.left = 38+"%"
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }else if(clickedData.name == "研究"){
        industryText.style.top = 295+"%"
        industryText.style.left = 42+"%"
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }else if(clickedData.name == "医院和医疗保健"){
        industryText.style.top = 300+"%"
        industryText.style.left = 44+"%"
        industryText.style.width = 20+"%"
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }else if(clickedData.name == "金融服务"){
        industryText.style.top = 332+"%"
        industryText.style.left = 40+"%"
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }else if(clickedData.name == "信息技术服务"){
        industryText.style.top = 325+"%"
        industryText.style.left = 9+"%"
        industryText.innerText = clickedData.name+"："+clickedData.value+"%"
        industryText.style.visibility = "visible"
    }else if(clickedData.name == "其他"){
        industryText.style.top = 295+"%"
        industryText.style.left = 12+"%"
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
        industryText.style.width = 15+"%"
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
            color: ['#1E2B69','#00458B',"#0079C5","#6BB7E4","#A2E2FF","#C1F2FF"],
            data:[          // 数据数组，name 为数据项名称，value 为数据项值
                {value:15, name:'运营'},
                {value:10, name:'教育'},
                {value:8, name:'医疗保健服务'},
                {value:10, name:'研究'},
                {value:42, name:'其他'},
                {value:15, name:'工程'}
            ],
            label:{
                // show:false
            }
        }
    ]
})

functionPie.on('mousemove',function (params) {
    let clickedData = params.data;

    if(clickedData.name == "运营"){
        functionText.style.top = 292+"%"
        functionText.style.left = 78+"%"
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }else if(clickedData.name == "教育"){
        functionText.style.top = 302+"%"
        functionText.style.left = 82+"%"
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }else if(clickedData.name == "医疗保健服务"){
        functionText.style.top = 315+"%"
        functionText.style.left = 84+"%"
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }else if(clickedData.name == "研究"){
        functionText.style.top = 330+"%"
        functionText.style.left = 80+"%"
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }else if(clickedData.name == "其他"){
        functionText.style.top = 330+"%"
        functionText.style.left = 50+"%"
        functionText.innerText = clickedData.name+"："+clickedData.value+"%"
        functionText.style.visibility = "visible"
    }else if(clickedData.name == "工程"){
        functionText.style.top = 294+"%"
        functionText.style.left = 50+"%"
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
