<template>
  <div>
    <div class="familyUseOne">
      <div class="familyUseOneContentBg"></div>

      <div class="familyUseOneContent">
        <div class="familyUseOneRight">
          <div class="familyUseOneRightTop"></div>
          <div class="familyUseOneRightTitleBg">
            <div class="familyUseOneRightTitleBgImg">
              <div class="familyUseOneRightTitle">家庭辅导工具</div>
            </div>
          </div>
          <div class="familyUseOneRightContent">
            <div style="margin-bottom:10px">
              每道精选题目皆配套名师拆解的步骤小问
            </div>
            <div style="margin-bottom:10px">
              使用智能交互的方式引导学生自主思考解题逻辑
            </div>
            <div style="margin-bottom:10px">
              精准分析学生的强弱项，推送个性化定制习题，使学生得到高效提升
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="familyUseTwo">
      <div class="familyUseTwoContent">
        <div class="familyUseTwoContentIcon">
          <div class="familyUseTwoContentIconTop"><img src="../assets/icon1.png"/></div>
          <div class="familyUseTwoContentIconTitle">
            交互讲解
          </div>
          <div class="familyUseTwoContentIconSmallTitle">
            答案拆分，步骤引导
          </div>
        </div>
        <div class="familyUseTwoContentIcon">
          <div class="familyUseTwoContentIconTop" style="background:#9b7afc"><img src="../assets/icon2.png"/></div>
          <div class="familyUseTwoContentIconTitle">
            类题绑定
          </div>
          <div class="familyUseTwoContentIconSmallTitle">
            启发思考，举一反三
          </div>
        </div>
        <div class="familyUseTwoContentIcon">
          <div class="familyUseTwoContentIconTop" style="background:#fc7aa3"><img src="../assets/icon3.png"/></div>
          <div class="familyUseTwoContentIconTitle">
            错题归纳
          </div>
          <div class="familyUseTwoContentIconSmallTitle">
            复盘学习，温故知新
          </div>
        </div>
        <div class="familyUseTwoContentIcon">
          <div class="familyUseTwoContentIconTop" style="background:#ffb129"><img src="../assets/icon4.png"/></div>
          <div class="familyUseTwoContentIconTitle">
            个性测评
          </div>
          <div class="familyUseTwoContentIconSmallTitle">
            智能定级，高效训练
          </div>
        </div>
      </div>
    </div>

    <div class="familyUseThree">
      <div class="familyUseThreeContent">
        <div class="familyUseThreeContentTop">
          <div class="familyUseThreeContentTopOne"></div>
          <div class="familyUseThreeContentTopTwo">
            高效数学学习工具
          </div>
          <!-- <div class="familyUseThreeContentTopThree">EFFICIENT</div> -->
        </div>

        <div class="familyUseThreeContentBottom">
          <div class="familyUseThreeContentBottomOne">
            <div class="familyUseThreeContentBottomOneTitle"><div>
              <img src="../assets/familyUse3.png" />
            </div>
              交互讲解，启发思考
            </div>
            <v-carousel hide-delimiters height="260px" style="border-radius:20px;border: 1px solid rgba(34, 53, 160, 1);">
             <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                cycle
              >
              </v-carousel-item>
            </v-carousel>
          </div>

          <div style="text-align:center;margin:20px 0px;"><img src="../assets/familyUse2.png" /></div>

          <div class="familyUseThreeContentBottomTwo">
            <div class="familyUseThreeContentBottomTwoTitle"><div><img src="../assets/familyUse3.png" /></div>掌握思路，同类尝试</div>

            <div>
              <img src="../assets/familyCutPic/家庭页_原题+试一试.png" width="100%" />
            </div>
          </div>

          <div style="text-align:center;margin:20px 0px;"><img src="../assets/familyUse2.png" /></div>

          <div class="familyUseThreeContentBottomThree">
            <div class="familyUseThreeContentBottomThreeTitle">
              <img src="../assets/familyUse3.png" />
              归纳错题，温故知新
            </div>

            <img src="../assets/familyCutPic/错题.svg" width="100%" style="border-radius:20px"/>
          </div>
        </div>
      </div>
    </div>

    <div class="familyUseForth">
      <div class="familyUseForthContent">
        <div class="familyUseForthContentTop">
          <div class="familyUseForthContentTopOne"></div>
          <div class="familyUseForthContentTopTwo">
            智能测评
          </div>
          <div class="familyUseForthContentTopThree"></div>
        </div>

        <div class="familyUseForthContentBottom">
          <div>
            <img src="../assets/familyCutPic/整体.svg"/>
          </div>
          <div style="position:absolute;top:55px;left:161px">
            选择题目
          </div>
          <div style="position:absolute;top:55px;left:548px">
            生成测评卷
          </div>
          <div style="position:absolute;top:55px;left:979px">
            测评报告
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/236f0d59e0d5464f93802200fd61e2e4.png'
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/097dd9c7ea0f41e8b2870a6bdd890095.png'
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/1a453f9b8d11430b817990e9bf6a45c4.png'
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/e479a05a263a40b6bf88575262097fd8.png'
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/16ab07d58f254c6e9b11bf44a8649a90.png'
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/49d2138cd7844d3684167d24b2ecc596.png'
        },
        {
          src: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/57be2757a5324454bad82bb73d99218b.png'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.familyUseOne {
  height: 600px;
  width: 100%;
  background: url('../assets/familyUseBg.png') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  position: relative;

  .familyUseOneContentBg {
    height: 300px;
    width: 100%;
    background: rgba(255, 150, 64, 0.5);
    z-index: 5;

    position: absolute;
    top:151px;
    left: 0px;
  }

  .familyUseOneContent {
    width:1200px;
    display: flex;
    justify-content: center;
    align-items: center;

      .familyUseOneRight {
      z-index: 5;
      margin-top: 10px;
      width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .familyUseOneRightTop {
        width:20px;
        height: 6px;
        border-radius: 5px;
        background: #fff;
      }

      .familyUseOneRightTitleBg {
        margin-top: 25px;
        height:80px;
        width: 383px;
        background: #fff;
        border-radius:40px;
        display: flex;
        justify-content: center;
        align-items: center;

        .familyUseOneRightTitleBgImg {
          background: url('../assets/family.png') no-repeat;
          background-size: cover;
          height: 106%;
          width: 100%;
          text-align: center;

          .familyUseOneRightTitle {
            color:rgba(243, 183, 6, 1);
            font-size: 40px;
            margin:15px 0px;
            font-weight: 600;
          }
        }
      }

      .familyUseOneRightContent {
        text-align: center;
        color: #fff;
        font-size: 20px;
        margin-top: 30px;
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
        width: 120px;
        height: 120px;
        background: #00cafd;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        img {
          width: 88px;
        }
      }

      .familyUseTwoContentIconTitle {
        margin:30px 0px 10px;
        color:rgba(33, 33, 33, 1);
        font-size: 20px;
        font-weight: 600;
      }

      .familyUseTwoContentIconSmallTitle {
        color: rgba(165, 177, 189, 1);
        font-size: 16px;
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
    width: 1000px;
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
          width: 300px;
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
          left: 349px;
          z-index: 10;

          img {
            position: absolute;
            top:10px;
            left:31px;
          }
        }
      }

      .familyUseThreeContentBottomTwo {
        height: 440px;
        background: #fff;
        margin-top: 50px;
        border-radius: 20px;
        position: relative;

        .familyUseThreeContentBottomTwoTitle {
          display: flex;
          width: 300px;
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
          left: 349px;
          z-index: 10;

          img {
            position: absolute;
            top:10px;
            left:31px;
          }
        }
      }

      .familyUseThreeContentBottomThree {
        width: 100%;
        background: #fff;
        margin-top: 50px;
        border: 1px solid rgba(34, 53, 160, 1);
        border-radius: 20px;
        position: relative;

        .familyUseThreeContentBottomThreeTitle {
          display: flex;
          width: 300px;
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
          left: 349px;
          z-index: 10;

          img {
            position: absolute;
            top:10px;
            left:31px;
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
        height: 20px;
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