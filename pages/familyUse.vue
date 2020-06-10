<template>
  <div>
    <div class="familyUseOne">
      <div class="familyUseOneContent">
        <div class="familyUseOneLeft">
          <img src="../assets/person3.png"/>
        </div>

        <div class="familyUseOneRight">
          <div class="familyUseOneRightTop"></div>
          <div class="familyUseOneRightTitle">家庭辅导工具</div>
          <div class="familyUseOneRightContent">
            <div style='margin-bottom:10px'>每道精选题目皆配套名师拆解的步骤小问</div>
            <div style='margin-bottom:10px'>使用智能交互的方式引导学生自主思考解题逻辑</div>
            <div style='margin-bottom:10px'>精准分析学生的强弱项，推送个性化定制习题，使学生得到高效提升</div>
          </div>
        </div>
      </div>
    </div>

    <div class="familyUseTwo">
      <div class="familyUseTwoContent">
        <div class="familyUseTwoContentIcon">
          <div class="familyUseTwoContentIconTop"><img src="../assets/icon1.png"/></div>
          <div class="familyUseTwoContentIconTitle">题目讲解细致</div>
          <div class="familyUseTwoContentIconSmallTitle">启发思考，拒绝死记硬背</div>
        </div>
        <div class="familyUseTwoContentIcon">
          <div class="familyUseTwoContentIconTop" style="background:#9b7afc"><img src="../assets/icon2.png"/></div>
          <div class="familyUseTwoContentIconTitle">荐题高度相似</div>
          <div class="familyUseTwoContentIconSmallTitle">实时检验并巩固学习成果</div>
        </div>
        <div class="familyUseTwoContentIcon">
          <div class="familyUseTwoContentIconTop" style="background:#fc7aa3"><img src="../assets/icon3.png"/></div>
          <div class="familyUseTwoContentIconTitle">实时检验并巩固学习成果</div>
          <div class="familyUseTwoContentIconSmallTitle">实时检验并巩固学习成果</div>
        </div>
        <div class="familyUseTwoContentIcon">
          <div class="familyUseTwoContentIconTop" style="background:#ffb129"><img src="../assets/icon4.png"/></div>
          <div class="familyUseTwoContentIconTitle">实时检验并巩固学习成果</div>
          <div class="familyUseTwoContentIconSmallTitle">实时检验并巩固学习成果</div>
        </div>
      </div>
    </div>

    <div class="familyUseThree">
      <div class="familyUseThreeContent">
        <div class="familyUseThreeContentTop">
          <div class="familyUseThreeContentTopOne"></div>
          <div class="familyUseThreeContentTopTwo">选择数学工具，就要高效的</div>
          <div class="familyUseThreeContentTopThree">EFFICIENT</div>
        </div>

        <div class="familyUseThreeContentBottom">
          <div class="familyUseThreeContentBottomOne">
            <div class="familyUseThreeContentBottomOneTitle"><div><img src="../assets/familyUse3.png"/></div>做错题目，查看智能引导启发思考</div>
            <v-carousel hide-delimiters height="402px" style="border-radius:20px;border: 1px solid rgba(34, 53, 160, 1);">
             <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                cycle
              >
              </v-carousel-item>
            </v-carousel>
          </div>

          <div style="text-align:center;margin:20px 0px;"><img src="../assets/familyUse2.png"/></div>

          <div class="familyUseThreeContentBottomTwo">
            <div class="familyUseThreeContentBottomTwoTitle"><div><img src="../assets/familyUse3.png"/></div>掌握思路，立即进行同类题目二次尝试</div>

            <div>
              <div style="text-align:right;margin-right:30px;margin-top:20px">
                <v-btn :outlined='showTry' color='blue' depressed style="color:#fff" width="80px" @click="showOther = true, showTry = false">原题</v-btn>
                <v-btn :outlined='showOther' color='blue' style="color:#fff" width="80px" @click="showOther = false, showTry = true">试一试</v-btn>
              </div>
              <img src="../assets/familyCutPic/原题.svg" width="100%" v-if="showOther"/>
              <img src="../assets/familyCutPic/试一试.svg" width="100%" v-if="showTry"/>
            </div>
          </div>

          <div style="text-align:center;margin:20px 0px;"><img src="../assets/familyUse2.png"/></div>

          <div class="familyUseThreeContentBottomThree">
            <div class="familyUseThreeContentBottomThreeTitle">
              <img src="../assets/familyUse3.png"/>
              归纳错题，对每次答题过程记录分析
            </div>

            <img src="../assets/familyCutPic/错题.svg" width="100%" style="border-radius:5px"/>
          </div>
        </div>
      </div>
    </div>

    <div class="familyUseForth">
      <div class="familyUseForthContent">
        <div class="familyUseForthContentTop">
          <div class="familyUseForthContentTopOne"></div>
          <div class="familyUseForthContentTopTwo">智能测评</div>
          <div class="familyUseForthContentTopThree">INTELLIGENT EVALUATION</div>
        </div>

        <div class="familyUseForthContentBottom">
          <div><img src="../assets/familyCutPic/智能测评整体.svg"/></div>
          <div style="position:absolute;top:55px;left:161px">选择题目</div>
          <div style="position:absolute;top:55px;left:548px">生成测评卷</div>
          <div style="position:absolute;top:55px;left:979px">测评报告</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showTry:false,
      showOther:true,
      items: [
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/b439298fad974fc08b044e5a891abf62.svg',
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/18b8da01bb85484582e2e58322ecd5d1.svg',
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/cde38240f013481bb194bb1bb03af0eb.svg',
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/e560e3122f9748da96d809e8135c0885.svg',
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/9c9b9b4e21ef469db9b04c1b7c2ee1d0.svg',
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/fc8010131abf4f3d843d3cf1631b57d6.svg',
        },
      ],
    }
  }
}
</script>

<style lang="less" scoped>
.familyUseOne {
  height: 600px;
  width: 100%;
  background: url('../assets/familyUseBg.png');
  display: flex;
  justify-content: center;

  .familyUseOneContent {
    width:1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .familyUseOneLeft {
      width: 600px;
    }

    .familyUseOneRight {
      flex: 1;
      margin-left:100px;

      .familyUseOneRightTop {
        width:20px;
        height: 6px;
        border-radius: 5px;
        background: #fff;
      }

      .familyUseOneRightTitle {
        font-family: PMZD;
        color:#fff;
        font-size: 40px;
        margin:15px 0px;
      }

      .familyUseOneRightContent {
        color: #fff;
        font-size: 24px;
      }
    }
  }
}

.familyUseTwo {
  height: 450px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;

  .familyUseTwoContent {
    width: 1200px;
    display: flex;
    justify-content: space-between;

    .familyUseTwoContentIcon{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .familyUseTwoContentIconTop {
        width: 140px;
        height: 140px;
        background: #00cafd;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        img {
          width: 100px;
        }
      }

      .familyUseTwoContentIconTitle {
        margin:30px 0px 10px;
        color:rgba(33, 33, 33, 1);
        font-size: 26px;
        font-weight: 600;
      }

      .familyUseTwoContentIconSmallTitle {
        color: rgba(165, 177, 189, 1);
        font-size: 20px;
      }
    }
  }
}

.familyUseThree {
  height: 1850px;
  width: 100%;
  background: #409eff;
  display: flex;
  justify-content: center;

  .familyUseThreeContent {
    width: 1200px;
    background: url('../assets/familyUse1.png') no-repeat center 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .familyUseThreeContentTop {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;

      .familyUseThreeContentTopOne {
        width:20px;
        height: 6px;
        border-radius: 5px;
        background: #fff;
      }

      .familyUseThreeContentTopTwo {
        font-family: PMZD;
        color:#fff;
        font-size: 40px;
        margin:15px 0px;
      }

      .familyUseThreeContentTopThree {
        font-size: 20px;
        color:rgba(255, 255, 255, 0.3);
      }
    }


    .familyUseThreeContentBottom {
      width: 100%;
      margin-top: 20px;
      position: relative;

      .familyUseThreeContentBottomOne {
        
        .familyUseThreeContentBottomOneTitle {
          display: flex;
          width: 500px;
          height: 50px;
          background: #fff;
          border-radius: 10px;
          border: 1px solid rgba(34, 53, 160, 1);
          color: rgba(34, 53, 160, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          font-weight: 600;
          position: relative;
          top: 25px;
          left: 353px;
          z-index: 10;

          img {
            position: absolute;
            top:10px;
            left:70px;
          }
        }
      }

      .familyUseThreeContentBottomTwo {
        width: 100%;
        background: #fff;
        margin-top: 50px;
        border: 1px solid rgba(34, 53, 160, 1);
        border-radius: 10px;
        position: relative;

        .familyUseThreeContentBottomTwoTitle {
          display: flex;
          width: 500px;
          height: 50px;
          background: #fff;
          border-radius: 10px;
          border: 1px solid rgba(34, 53, 160, 1);
          color: rgba(34, 53, 160, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          font-weight: 600;
          position: absolute;
          top: -26px;
          left: 353px;
          z-index: 10;

          img {
            position: absolute;
            top:10px;
            left:51px;
          }
        }
      }

      .familyUseThreeContentBottomThree {
        width: 100%;
        background: #fff;
        margin-top: 50px;
        border: 1px solid rgba(34, 53, 160, 1);
        border-radius: 10px;
        position: relative;

        .familyUseThreeContentBottomThreeTitle {
          display: flex;
          width: 500px;
          height: 50px;
          background: #fff;
          border-radius: 10px;
          border: 1px solid rgba(34, 53, 160, 1);
          color: rgba(34, 53, 160, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          font-weight: 600;
          position: absolute;
          top: -26px;
          left: 353px;
          z-index: 10;

          img {
            position: absolute;
            top:10px;
            left:51px;
          }
        }
      }
    }
  }
}

.familyUseForth {
  height: 1000px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;

  .familyUseForthContent {
    width: 1200px;
    background: url('../assets/familyUse4.png') no-repeat center 117px;
    display: flex;
    flex-direction: column;
    align-items: center;

     .familyUseForthContentTop {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 107px;

      .familyUseForthContentTopOne {
        width:20px;
        height: 6px;
        border-radius: 5px;
        background: rgba(64, 158, 255, 1);
      }

      .familyUseForthContentTopTwo {
        font-family: PMZD;
        color:rgba(64, 158, 255, 1);
        font-size: 40px;
        margin:15px 0px;
      }

      .familyUseForthContentTopThree {
        font-size: 20px;
        color:rgba(232, 240, 248, 1);
      }
    }

    .familyUseForthContentBottom {
      margin-top:30px;
      position: relative;
      color:#fff;
      font-size: 32px;
    }
  }
}
</style>