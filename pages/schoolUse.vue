<template>
  <div>
    <div class="schoolUseOne">
      <div class="schoolUseOneContentBg"></div>

      <div class="schoolUseOneContent">
        <div class="schoolUseOneRight">
          <div class="schoolUseOneRightTop"></div>
          <div class="schoolUseOneRightTitleBg">
            <div class="schoolUseOneRightTitleBgImg">
              <div class="schoolUseOneRightTitle">智能教学工具</div>
            </div>
          </div>
          <div class="schoolUseOneRightContent">
            <div style='margin-bottom:10px'>贴合用户线下使用习惯，教师选择班级上传学生花名册，自动匹配分班</div>
            <div style='margin-bottom:10px'>支持教师以集体或个人为单位进行针对性派卷，因材施教，实现同班异步提升</div>
            <div>最后，生成丰富的学情报告，打通师生间的信息渠道，辅助教师开展精准的教学工作</div>
          </div>
        </div>
      </div>
    </div>

    <div class="schoolUseTwo">
      <div class="schoolUseTwoContent">
        <div class="schoolUseTwoContentIcon">
          <div class="schoolUseTwoContentIconTop"><img src="../assets/icon5.png"/></div>
          <div class="schoolUseTwoContentIconTitle">一键组班</div>
          <div class="schoolUseTwoContentIconSmallTitle">线下习惯，上手简单</div>
        </div>
        <div class="schoolUseTwoContentIcon">
          <div class="schoolUseTwoContentIconTop" style="background:#ffd629"><img src="../assets/icon6.png"/></div>
          <div class="schoolUseTwoContentIconTitle">智能批改</div>
          <div class="schoolUseTwoContentIconSmallTitle">主观客观，一秒批改</div>
        </div>
        <div class="schoolUseTwoContentIcon">
          <div class="schoolUseTwoContentIconTop" style="background:#ff8216"><img src="../assets/icon7.png"/></div>
          <div class="schoolUseTwoContentIconTitle">作业布置</div>
          <div class="schoolUseTwoContentIconSmallTitle">分组派发，同班异步</div>
        </div>
        <div class="schoolUseTwoContentIcon">
          <div class="schoolUseTwoContentIconTop" style="background:#00b2fd"><img src="../assets/icon8.png"/></div>
          <div class="schoolUseTwoContentIconTitle">学情报告</div>
          <div class="schoolUseTwoContentIconSmallTitle">多维分析，量化能力</div>
        </div>
      </div>
    </div>

    <div class="schoolUseThree">
      <div class="schoolUseThreeContent">
        <div class="schoolUseThreeContentTop">
          <div class="schoolUseThreeContentTopOne"></div>
          <div class="schoolUseThreeContentTopTwo">教学帮手</div>
          <div class="schoolUseThreeContentTopThree"></div>
        </div>

        <div class="schoolUseThreeContentBottom">
          <div class="schoolUseThreeContentBottomItem">
            <div class="schoolUseThreeContentBottomItemTop">
              <img src="../assets/schoolCutPic/校园_智能组卷.png" style="border-radius:20px;cursor:pointer;position:absolute;left:-20px;top:-9px" @click="showHelpPicOne = true"/>
              <img src="../assets/schoolCutPic/校园_智能组卷-大.svg" style="border-radius:20px;position:absolute;top:-238px;left:-24px;cursor:pointer" v-if="showHelpPicOne" @click="showHelpPicOne = false"/>
            </div>
            <div class="schoolUseThreeContentBottomItemTitle">智能组卷</div>
            <div class="schoolUseThreeContentBottomItemGang"></div>
          </div>

          <div class="schoolUseThreeContentBottomItemTwo">
            <div class="schoolUseThreeContentBottomItemTop">
              <img src="../assets/schoolCutPic/校园_布置作业.png" style="border-radius:20px;cursor:pointer;position:absolute;left:-20px;top:-9px"  @click="showHelpPicTwo = true"/>
              <img src="../assets/schoolCutPic/校园_布置作业-大.png" style="border-radius:20px;position:absolute;top:-238px;left:-24px;cursor:pointer" v-if="showHelpPicTwo" @click="showHelpPicTwo = false"/>
            </div>
            <div class="schoolUseThreeContentBottomItemTitle">布置作业</div>
            <div class="schoolUseThreeContentBottomItemGang"></div>
          </div>

          <div class="schoolUseThreeContentBottomItemThree">
            <div class="schoolUseThreeContentBottomItemTop">
              <img src="../assets/schoolCutPic/校园_学生统计.png" style="border-radius:20px;cursor:pointer;position:absolute;left:-20px;top:-9px"  @click="showHelpPicThree = true"/>
              <img src="../assets/schoolCutPic/校园_学生统计-大.png" style="border-radius:20px;position:absolute;top:-238px;left:-24px;cursor:pointer" v-if="showHelpPicThree" @click="showHelpPicThree = false"/>
            </div>
            <div class="schoolUseThreeContentBottomItemTitle">学生统计</div>
            <div class="schoolUseThreeContentBottomItemGang"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="schoolUseForth">
      <div class="schoolUseForthContent">
        <div class="schoolUseForthContentTop">
          <div class="schoolUseForthContentTopGang"></div>
          <div class="schoolUseForthContentTopTitle">学校管理</div>
          <div class="schoolUseForthContentTopSmallTitle">
          </div>
        </div>

        <div class="schoolUseForthContentBottom">
          <div style="margin-top:20px">
            <img src="../assets/schoolUse5.png" width="1200px" />
          </div>

          <div class="schoolUseForthContentBottomItem">
            <div style="position:absolute;top:-347px;left:293px;cursor:pointer" @click="showPicOne = true"><img src="../assets/schoolUseIcon.png"/></div>
            <div style="position:absolute;top:-347px;left:776px;cursor:pointer" @click="showPicTwo = true"><img src="../assets/schoolUseIcon.png"/></div>
            
            <div style="position:absolute;top:-683px;left:134px;cursor:pointer" v-if="showPicOne" @click="showPicOne = false"><img src="../assets/schoolCutPic/生成班级管理.png"/></div>
            <div style="position:absolute;top:-683px;left:615px;cursor:pointer" v-if="showPicTwo" @click="showPicTwo = false"><img src="../assets/schoolCutPic/生成学生账号.png"/></div>

            <div style="position:absolute;top:-171px;left:275px;color:rgba(64, 158, 255, 1);font-size:20px">生成科任老师账号</div>
            <div style="position:absolute;top:-170px;left:760px;text-align:center;color:rgba(64, 158, 255, 1);font-size:20px">上传花名册，<div> 一键生成学生账号</div></div>
            <div style="position:absolute;top:-15px;left:265px;color:rgba(64, 158, 255, 1);font-size:20px">管理老师、教学班级</div>
            <div style="position:absolute;top:-15px;left:808px;color:rgba(64, 158, 255, 1);font-size:20px">查看学情</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPicOne:false,
      showPicTwo:false,
      showHelpPicOne:false,
      showHelpPicTwo:false,
      showHelpPicThree:false
    }
  }
}
</script>

<style lang="less" scoped>
.schoolUseOne {
  height: 600px;
  width: 100%;
  background: url('../assets/schoolUseBg.png') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  .schoolUseOneContentBg {
    height: 300px;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    z-index: 5;

    position: absolute;
    top:151px;
    left: 0px;
  }

  .schoolUseOneContent {
    width:1200px;
    display: flex;
    justify-content: center;
    align-items: center;

    .schoolUseOneRight {
      z-index: 5;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .schoolUseOneRightTop {
        width:20px;
        height: 6px;
        border-radius: 5px;
        background: #fff;
      }

      .schoolUseOneRightTitleBg {
        margin-top: 25px;
        height:80px;
        width: 383px;
        background: #fff;
        border-radius:40px;
        display: flex;
        justify-content: center;
        align-items: center;

        .schoolUseOneRightTitleBgImg {
          background: url('../assets/school.png') no-repeat;
          background-size: cover;
          height: 100%;
          width: 100%;
          text-align: center;

          .schoolUseOneRightTitle {
            color:rgba(255, 99, 51, 1);
            font-size: 40px;
            margin:15px 0px;
            font-weight: 600;
          }
        }
      }

      .schoolUseOneRightContent {
        text-align: center;
        color: #fff;
        font-size: 20px;
        margin-top: 30px;
      }
    }
  }
}

.schoolUseTwo {
  height: 450px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;

  .schoolUseTwoContent {
    width: 1200px;
    display: flex;
    justify-content: space-between;

    .schoolUseTwoContentIcon{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .schoolUseTwoContentIconTop {
        width: 120px;
        height: 120px;
        background: #00e097;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        img {
          width: 88px;
        }
      }

      .schoolUseTwoContentIconTitle {
        margin:30px 0px 10px;
        color:rgba(33, 33, 33, 1);
        font-size: 20px;
        font-weight: 600;
      }

      .schoolUseTwoContentIconSmallTitle {
        color: rgba(165, 177, 189, 1);
        font-size: 16px;
      }
    }
  }
}

.schoolUseThree {
  height: 800px;
  width: 100%;
  background: #409eff;
  display: flex;
  justify-content: center;

  .schoolUseThreeContent {
    background: url('../assets/schoolUse1.png') no-repeat center 124px;
    width:1200px;
    height: 100%;

    .schoolUseThreeContentTop {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 90px;

      .schoolUseThreeContentTopOne {
        width:20px;
        height: 6px;
        border-radius: 5px;
        background: #fff;
      }

      .schoolUseThreeContentTopTwo {
        font-family: PMZD;
        color:#fff;
        font-size: 40px;
        margin:15px 0px;
      }

      .schoolUseThreeContentTopThree {
        font-size: 20px;
        color:#fff;
        height: 30px;
      }
    }

    .schoolUseThreeContentBottom {
      margin-top:120px;
      display: flex;
      justify-content: space-between;

      .schoolUseThreeContentBottomItem,.schoolUseThreeContentBottomItemTwo,.schoolUseThreeContentBottomItemThree {
        height: 290px;
        width: 390px;
        border-radius: 10px;
        background: url('../assets/schoolUse2.png');
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        position: relative;

        .schoolUseThreeContentBottomItemTop {
          width: 390px;
          height: 228px;
          background: #fff;
          border-radius: 10px;

          position: absolute;
          left: 0px;
          top: -53px;
        }

        .schoolUseThreeContentBottomItemTitle {
          color: #fff;
          font-size: 32px;
          margin-bottom: 20px;
        }

        .schoolUseThreeContentBottomItemGang {
          width:20px;
          height: 6px;
          border-radius: 5px;
          background: #fff;
          margin-bottom: 25px;
        }
      }

      .schoolUseThreeContentBottomItemTwo {
        height: 290px;
        width: 390px;
        border-radius: 10px;
        background: url('../assets/schoolUse3.png');
      }

      .schoolUseThreeContentBottomItemThree {
        height: 290px;
        width: 390px;
        border-radius: 10px;
        background: url('../assets/schoolUse4.png');
      }
    }
  }
}

.schoolUseForth {
  height: 800px;
  width: 100%;
  background: #ebf5ff;
  display: flex;
  justify-content: center;

  .schoolUseForthContent {
    width: 1200px;
    background: url('../assets/schoolUse6.png') no-repeat center 88px;

    .schoolUseForthContentTop {
      display: flex;
      flex-direction: column;
      align-items: center;

      .schoolUseForthContentTopGang {
        margin:90px 0 20px;
        background:#409EFF;
        height:5px;
        width:15px;
        border-radius: 3px;
      }

      .schoolUseForthContentTopTitle {
        font-family: PMZD;
        color: rgba(64, 158, 255, 1);
        font-size: 35px;
      }

      .schoolUseForthContentTopSmallTitle {
        height: 40px;
        color: rgba(64, 158, 255, 0.2);
        font-size: 28px;
        margin:5px 0px;
      }
    }
    
    .schoolUseForthContentBottom {

      .schoolUseForthContentBottomItem {
        position: relative;
      }
    }
  }
}
</style>