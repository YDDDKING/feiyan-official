<template>
    <!-- 第一部分开始 -->
    <div class="index">
      <div class="indexOne">
        <div class="indexOneTitle">
          <div class="indexOneTitleOne"><img src="../assets/indexBanner.png"/></div>
          <div class="indexOneTitleTwo">YOUR PRIVATE TUTOR INTELLIFENCE</div>
          <div class="indexOneTitleBtn">
            <div class="indexOneTitleTeaBtn" @click="openRK(1)">教师入口</div>
            <div class="indexOneTitleStuBtn" @click="openRK(2)">学生入口</div>
          </div>
        </div>
      </div>
      <!-- 第一部分结束 -->



      <!-- 第二部分开始 -->
      <div class="indexTwo">
        <div class="indexTwoContent">
          <div class="indexTwoLeft"><img src="../assets/indexTwo.png"/></div>
          <div class="indexTwoRight">
            <div class="indexTwoRightTitleOne"></div>
            <div class="indexTwoRightTitle">飞燕数学</div>

            <div class="indexTwoRightContent" style="margin-bottom:30px;margin-top:30px">飞燕数学是一款集智能派卷、自动批改、互动讲解、个性测评等功能为一体的新型交互式数学学习工具</div>

            <div class="indexTwoRightContent">系统以贴合用户线下习惯为设计标准，以引导学生思考为设计核心，解决学生在家没人辅导，看不懂参考答案的痛点，让学生学懂每一道题目</div>
          </div>
        </div>
      </div>
      <!-- 第二部分结束 -->



      <!-- 第三部分开始 -->
      <div class="indexThree">
        <div  class="indexThreeContent">
          <nuxt-link to="/familyUse">
            <div class="indexThreeContentImgOne">
              <img src="../assets/index8.png" style="height:100%"/>

              <div style="position:absolute;bottom:79px;left:175px;font-size:40px;color:#fff;font-family: PMZD;">家庭应用方案</div>
              <div style="position:absolute;bottom:44px;left:154px;font-size:20px;color:#fff">辅助学生在家自主完成学习复盘</div>
            </div>
          </nuxt-link>
          <nuxt-link to="/schoolUse">
            <div class="indexThreeContentImgTwo">
              <img src="../assets/index10.png" style="height:100%"/>

              <div style="position:absolute;bottom:79px;left:175px;font-size:40px;color:#fff;font-family: PMZD;">校园运用方案</div>
              <div style="position:absolute;bottom:44px;left:154px;font-size:20px;color:#fff">支持老师进行精准高效的教学工作</div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- 第三部分结束 -->

      <div style="height:38px;width:100%;background:#ffd629"></div>

      <!-- 第四部分开始 -->
      <div class="indexForth">
        <div class="indexForthContent">
          <div class="indexForthContentTop"></div>
          <div class="indexForthContentTitle">选择数学工具，就要高效的</div>
          <div class="indexForthContentSmallTitle">EFFICIENT MATHEMATICAL TOOLS</div>
          <div>
            <indexTools />
          </div>
        </div>
      </div>
      <!-- 第四部分结束 -->


      <!-- 第五部分开始 -->
      <div class="indexFifth">
        <div class="indexFifthContent">
          <div class="indexFifthContentLeft">
            <div class="indexFifthContentLeftTop">
              <div class="indexFifthContentLeftTopBird"><img src="../assets/bird.png"/><span class="indexFifthContentLeftTopBirdText">题目</span></div>
              <div style="height:240px"><img src="../assets/题目.svg" style="width:100%;height:100%;border-radius:20px"/></div>
            </div>

            <div class="indexFifthContentLeftBottom">
              <div class="indexFifthContentLeftBottomBird"><img src="../assets/bird.png"/><span class="indexFifthContentLeftBottomBirdText">解题步骤</span></div>
              <v-carousel hide-delimiters height="290px" style="border-radius:20px">
                <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
                  style="height:90%"
                >
                  <img :src="item.src" style="height:90%;width:100%;border-radius:20px">
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>

          <div class="indexFifthContentRight">
            <div class="indexFifthContentRightTop">
              <div class="indexFifthContentRightTopOne"></div>
              <div class="indexFifthContentRightTopTwo">TI智能辅导系统</div>
              <div class="indexFifthContentRightTopThree">TUTOR INTELLIGENCE</div>
            </div>

            <div class="indexFifthContentRightBottom">
              <div class="indexFifthContentRightBottomItem">
                <div class="indexFifthContentRightBottomCircle">
                  <div class="indexFifthContentRightBottomCircleOne">
                    <div class="indexFifthContentRightBottomCircleTwo"></div>
                  </div>
                </div>

                <div class="indexFifthContentRightBottomText">名师对每道试题进行高颗粒度拆解，由人工智能系统对学生进行交互讲解，启发思考，拒绝死记硬背，独创智能辅导</div>
              </div>

              <div class="indexFifthContentRightBottomItem" style="margin-top:45px">
                <div class="indexFifthContentRightBottomCircle">
                  <div class="indexFifthContentRightBottomCircleOne" style="background:#FFE6C0">
                    <div class="indexFifthContentRightBottomCircleTwo" style="background:#F39D18"></div>
                  </div>
                </div>

                <div class="indexFifthContentRightBottomText">高颗粒度的步骤引导，循循善诱，对学生答题过程进行标记分析，定位错因</div>
              </div>

              <div class="indexFifthContentRightBottomItem" style="margin-top:45px">
                <div class="indexFifthContentRightBottomCircle">
                  <div class="indexFifthContentRightBottomCircleOne" style="background:#FFE4E4">
                    <div class="indexFifthContentRightBottomCircleTwo" style="background:#FF4040"></div>
                  </div>
                </div>

                <div class="indexFifthContentRightBottomText">逐步引导学生自主思考，帮助消化解题逻辑，得到真实提升，让学习不再似懂非懂</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第五部分结束 -->


      <!-- 第六部分开始 -->
      <div class="indexSixth">
        <div class="indexSixthContent">
          <div class="indexSixthLeft">
            <div class="indexSixthLeftTop"></div>
            <div class="indexSixthLeftTitle">关于我们</div>
            <div class="indexSixthLeftContent">
              <div style="margin-bottom:20px">广州凤腾阁科技有限公司是一家创新型教育科技公司，自主开发以人工智能和大数据为驱动的数学学习系统</div>
              <div>我们拥有完善的教育产品开发技术，以及强大的教研团队，我们立志于用工具为教师与学生赋能，为学校提供高品质的教育工具，让学习更加智能高效</div>
            </div>
          </div>

          <div class="indexSixthRight">
            <div class="indexSixthRightTopItem">
              <div class="indexSixthRightTop"></div>
              <div class="indexSixthRightTitle">我们的愿景</div>
              <div class="indexSixthRightContent">成为中国教育工具领域的标杆产品</div>
            </div>

            <div class="indexSixthRightBottomItem">
              <div class="indexSixthRightTop"></div>
              <div class="indexSixthRightTitle">我们的使命</div>
              <div class="indexSixthRightContent">为下一代提供高效普惠的数学学习工具</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第六部分结束 -->
    </div>
</template>


<script>
import indexTools from '../components/indexTools'
export default {
  data () {
    return {
      items: [
        {
          src:'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/ce9141cb8c4e4f8e962f7cc820581438.svg',
        },
        {
          src:'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/532cb06df0584623a2cb117d1decf105.svg',
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/545b63b3778a4fd980314b3b2445d51d.svg',
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/87196a20589646708b796855e2645d87.svg',
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/8ec1fb8c537e4224b85ff56dc7a0901a.svg',
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/06d6a13551dc489fb2caa6940f4c9617.svg',
        },
      ],
    }
  },
  components: {
    indexTools
  },
  methods: {
    openRK (status) {
      if (this.IEVersion() === -1) {
        if (status === 1) {
          window.open('http://teacher.feiyanmath.com')
        } else {
          window.open('http://student.feiyanmath.com')
        }
      } else {
        this.tipsDialog = true
      }
    },
    IEVersion () {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
      var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
      var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
      if(isIE) {
          var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
          reIE.test(userAgent);
          var fIEVersion = parseFloat(RegExp["$1"]);
          if(fIEVersion == 7) {
            return 7;
          } else if(fIEVersion == 8) {
            return 8;
          } else if(fIEVersion == 9) {
            return 9;
          } else if(fIEVersion == 10) {
            return 10;
          } else {
            return 6;//IE版本<=7
          }
          } else if(isEdge) {
            return 'edge';//edge
          } else if(isIE11) {
            return 11; //IE11
          }else{
            return -1;//不是ie浏览器
      }
    }
  }
}
</script>


// <style src='../common/font.css'></style>
<style lang="less" scoped>
@import '../common/font.css';


.indexOne {
  height: 600px;
  width: 100%;
  background: url('../assets/indexBg.png');
  display: flex;
  justify-content: center;

  .indexOneTitle {
    width:600px;
    display: flex;
    flex-direction: column;
    padding-top:213px;
    
    // .indexOneTitleOne {
    //   font-family: PMZD;
    //   font-size: 40px;
    //   color:#fff;
    // }

    .indexOneTitleTwo {
      font-size: 24px;
      color:#fff;
      margin:10px 0px 40px;
    }

    .indexOneTitleBtn {
      display: flex;

      .indexOneTitleTeaBtn {
        width: 160px;
        height: 50px;
        background:url('../assets/teacherBg.png');
        color:#fff;
        margin-right:10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        border-radius: 5px;
        cursor: pointer;
      }

      .indexOneTitleStuBtn {
        cursor: pointer;
        width: 160px;
        height: 50px;
        background:url('../assets/stuBg.png');
        color:#fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        border-radius: 5px;
      }
    }
  }
}

.indexTwo {
  height: 500px;
  width: 100%;
  background: #dffcff;
  display: flex;
  justify-content: center;
  
  .indexTwoContent {
    width: 1200px;
    display: flex;


    .indexTwoLeft {
    height: 100%;
    width: 736px;
    }

    .indexTwoRight {
      flex:1;
      margin-left:40px;

      .indexTwoRightTitleOne {
        margin:90px 0 20px;
        background:#409EFF;
        height:5px;
        width:15px;
        border-radius: 3px;
      }

      .indexTwoRightTitle {
        font-family: PMZD;
        font-size:40px;
        color:#409EFF;
      }

      .indexTwoRightContent {
        color:#7794B1;
        font-size: 20px;
     }
    }
  }
}

.indexThree {
  height:600px;
  width:100%;
  display: flex;
  justify-content: center;

  .indexThreeContent {
    width:1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .indexThreeContentImgOne {
      border-radius: 20px;
      height:400px;
      position: relative;
    }
    .indexThreeContentImgOne:hover {
      box-shadow: 0px 10px 15px 10px rgba(255,204,51,0.2);
    }

    .indexThreeContentImgTwo {
      border-radius: 20px;
      height:400px;
      position: relative;
    }
    .indexThreeContentImgTwo:hover {
      box-shadow: 0px 10px 18px 10px rgba(255,99,51,0.2);
    }
  }
}

.indexForth {
  height: 800px;
  background: #f5faff;
  display: flex;
  justify-content: center;

  .indexForthContent {
    width:1200px;
    background: url('../assets/index3.png') no-repeat center 50px;
    display: flex;
    align-items: center;
    flex-direction: column;

      .indexForthContentTop {
        margin:90px 0 20px;
        background:#409EFF;
        height:5px;
        width:15px;
        border-radius: 3px;
      }

      .indexForthContentTitle {
        font-family: PMZD;
        color: rgba(64, 158, 255, 1);
        font-size: 35px;
      }

      .indexForthContentSmallTitle {
        color: rgba(232, 240, 248, 1);
        font-size: 28px;
        margin:5px 0px;
      }
  }
}

.indexFifth {
  height:800px;
  width: 100%;
  background: url(../assets/index9.png);
  display: flex;
  justify-content: center;

  .indexFifthContent {
    width:1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .indexFifthContentLeft {

      .indexFifthContentLeftTop {
        width: 620px;
        height: 250px;
        background: #fff;
        border-radius: 10px;
        position: relative;
        margin-bottom:49px;
        border: 1px solid #2235A0;

        .indexFifthContentLeftTopBird {
          position: absolute;
          top:-28px;
          left: 16px;

          .indexFifthContentLeftTopBirdText {
            position: absolute;
            top:15px;
            left: 46px;
            color:#2235A0;
            font-size:14px;
            font-weight: 600;
          }
        }
      }

      .indexFifthContentLeftBottom {
        border: 1px solid #2235A0;
        width: 620px;
        height: 300px;
        background: #fff;
        border-radius: 10px;
        position: relative;

        .indexFifthContentLeftBottomBird{
          position: absolute;
          top:-28px;
          left: 16px;
          z-index: 10;

          .indexFifthContentLeftBottomBirdText {
            position: absolute;
            top:15px;
            left: 42px;
            color:#2235A0;
            font-size:14px;
            font-weight: 600;
          }
        }
      }
    }

    .indexFifthContentRight {
      border: 1px solid #2235A0;
      width: 540px;
      height: 600px;
      background: #fff;
      border-radius: 10px;

      .indexFifthContentRightTop {
        background: url('../assets/index4.png') no-repeat center 30px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .indexFifthContentRightTopOne {
          background:#409EFF;
          height:5px;
          width:15px;
          border-radius: 3px;
          margin-top:60px
        }

        .indexFifthContentRightTopTwo {
          font-family: PMZD;
          font-size: 40px;
          color:#409EFF;
          margin: 20px 0 10px;
        }

        .indexFifthContentRightTopThree {
          color:#E8F0F8;
          font-size: 28px;
        }
      }

      .indexFifthContentRightBottom {
        padding:20px 35px;

        .indexFifthContentRightBottomItem {
          display: flex;

          .indexFifthContentRightBottomCircle {
            margin-right: 10px;
            padding-top:5px;

            .indexFifthContentRightBottomCircleOne {
              width:20px;
              height: 20px;
              background:#D6EAFF;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .indexFifthContentRightBottomCircleTwo {
              width:12px;
              height: 12px;
              background: #409EFF;
              border-radius: 50%;
            }
          }

          .indexFifthContentRightBottomText {
            font-size: 20px;
            color: #A5B1BD;
          }
        }
      }
    }
  }
}

.indexSixth {
  height: 480px;
  width: 100%;
  background: #409eff;
  display: flex;
  justify-content: center;
  align-items: center;

  .indexSixthContent {
    width: 1200px;
    display: flex;

    .indexSixthLeft {
    width:800px;
    height: 380px;
    border-radius: 20px;
    background: url(../assets/index5.png);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:50px;
    margin-right:25px;
    box-shadow: 0px 5px 15px 10px rgba(0,0,0,0.1);

      .indexSixthLeftTop {
        background:#fff;
        height:5px;
        width:15px;
        border-radius: 3px;
      }

      .indexSixthLeftTitle {
        font-family: PMZD;
        font-size: 40px;
        color:#fff;
        margin: 30px 0;
      }

      .indexSixthLeftContent {
        color:#fff;
        font-size: 20px;
      }
    }

    .indexSixthRight {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      

      .indexSixthRightTopItem {
        height: 180px;
        width: 380px;
        border-radius: 20px;
        background: url(../assets/index6.png);
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 5px 15px 10px rgba(0,0,0,0.1);

        .indexSixthRightTop {
          background:#fff;
          height:5px;
          width:15px;
          border-radius: 3px;
          margin: 30px 0 0;
        }

        .indexSixthRightTitle {
          font-family: PMZD;
          font-size: 40px;
          color:#fff;
          margin: 10px 0;
        }

        .indexSixthRightContent {
          color:#fff;
          font-size: 20px;
        }
      }

      .indexSixthRightBottomItem {
        box-shadow: 0px 5px 15px 10px rgba(0,0,0,0.1);
        height: 180px;
        width: 380px;
        border-radius: 20px;
        background: url(../assets/index7.png);
        display: flex;
        flex-direction: column;
        align-items: center;

        .indexSixthRightTop {
          background:#fff;
          height:5px;
          width:15px;
          border-radius: 3px;
          margin: 30px 0 0;
        }

        .indexSixthRightTitle {
          font-family: PMZD;
          font-size: 40px;
          color:#fff;
          margin: 10px 0;
        }

        .indexSixthRightContent {
          color:#fff;
          font-size: 20px;
        }
      }
    }
  }

  
}
</style>