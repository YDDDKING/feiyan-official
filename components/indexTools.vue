<template>
  <div class="indexTool">
    <div class="indexTool">
      <div class="indexToolItem">
        <div class="indexToolItemImg"><img src="../assets/icon1.png"/></div>
        <div class="indexToolItemTitle">题目讲解细致</div>
        <div class="indexToolItemSmallTitle">高颗粒度的学习引导</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#9B7AFC;"><img src="../assets/icon2.png"/></div>
        <div class="indexToolItemTitle">荐题高度相似</div>
        <div class="indexToolItemSmallTitle">学会举一反三</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#FC7AA3;"><img src="../assets/icon3.png"/></div>
        <div class="indexToolItemTitle">错题分类归纳</div>
        <div class="indexToolItemSmallTitle">复盘学习，温故知新</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#FFB129;"><img src="../assets/icon4.png"/></div>
        <div class="indexToolItemTitle">测评精准推题</div>
        <div class="indexToolItemSmallTitle">根据测评等级推不同难度的题目</div>
      </div>
      <!-- 中间 -->
      <div class="indexToolMiddle">
        <div class="indexToolMiddleImgBg">
          <img src="../assets/person2.png" class="indexToolMiddleImg"/>
          <div>学生端</div>
        </div>
      </div>
    </div>

    <div class="indexToolLine"></div>

    <div class="indexTool">
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#00E097"><img src="../assets/icon5.png"/></div>
        <div class="indexToolItemTitle">班级一键组成</div>
        <div class="indexToolItemSmallTitle">上手简单，方便快捷</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#FFD629;"><img src="../assets/icon6.png"/></div>
        <div class="indexToolItemTitle">试卷智能批改</div>
        <div class="indexToolItemSmallTitle">智能选卷，适配主观</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#FF8216;"><img src="../assets/icon7.png"/></div>
        <div class="indexToolItemTitle">作业布置灵活</div>
        <div class="indexToolItemSmallTitle">班级或分组，派卷后可调整</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#00B2FD;"><img src="../assets/icon8.png"/></div>
        <div class="indexToolItemTitle">统计丰富详尽</div>
        <div class="indexToolItemSmallTitle">根据测评等级推不同难度的题目</div>
      </div>

      <!-- 中间 -->
      <div class="indexToolMiddle">
        <div class="indexToolMiddleImgBg">
          <img src="../assets/person1.png" class="indexToolMiddleImg"/>
          <div>教师端</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.indexTool {
  display: flex;
  align-items: center;

  .indexToolLine {
    height:300px;
    width: 2px;
    background: #409EFF;
  }
  .indexTool {
    width:600px;
    display: flex;
    flex-wrap: wrap;
    position:relative;

    .indexToolMiddle {
      position: absolute;
      top:179px;
      left:232px;
      width: 138px;
      height: 138px;
      background: #f5faff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .indexToolMiddleImgBg {
        width: 122px;
        height: 122px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .indexToolMiddleImg {
          transform: rotateY(180deg);
          width: 76px;
        }
      }
    }

    .indexToolItem {
      width: 290px;
      height: 240px;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin:5px;
      border-radius: 10px;

      .indexToolItemImg {
        width:80px;
        height: 80px;
        background:rgba(0, 202, 253, 1);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .indexToolItemTitle {
        color:rgba(33, 33, 33, 1);
        font-size:20px;
        font-weight: 600;
        margin-top:20px;
      }

      .indexToolItemSmallTitle {
        font-size: 16px;
        padding:10px 30px;
        color: #A5B1BD;
        text-align: center;
      }
    }
  }
}
</style>