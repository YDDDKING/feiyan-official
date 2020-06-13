<template>
  <div class="indexTool">
    <div class="indexTool">
      <div class="indexToolItem">
        <div class="indexToolItemImg"><img src="../assets/icon1.png"/></div>
        <div class="indexToolItemTitle">交互讲解</div>
        <div class="indexToolItemSmallTitle">名师拆分，步骤引导</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#9B7AFC;"><img src="../assets/icon2.png"/></div>
        <div class="indexToolItemTitle">类题绑定</div>
        <div class="indexToolItemSmallTitle">启发思考，举一反三</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#FC7AA3;"><img src="../assets/icon3.png"/></div>
        <div class="indexToolItemTitle">错题归纳</div>
        <div class="indexToolItemSmallTitle">复盘学习，温故知新</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#FFB129;"><img src="../assets/icon4.png"/></div>
        <div class="indexToolItemTitle">个性测评</div>
        <div class="indexToolItemSmallTitle">智能定级，高效训练</div>
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
        <div class="indexToolItemTitle">一键组班</div>
        <div class="indexToolItemSmallTitle">线下习惯，上手简单</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#FFD629;"><img src="../assets/icon6.png"/></div>
        <div class="indexToolItemTitle">智能批改</div>
        <div class="indexToolItemSmallTitle">主观客观，一秒批改</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#FF8216;"><img src="../assets/icon7.png"/></div>
        <div class="indexToolItemTitle">作业布置</div>
        <div class="indexToolItemSmallTitle">分组派发，同班异步</div>
      </div>
      <div class="indexToolItem">
        <div class="indexToolItemImg" style="background:#00B2FD;"><img src="../assets/icon8.png"/></div>
        <div class="indexToolItemTitle">学情报告</div>
        <div class="indexToolItemSmallTitle">多维分析，量化能力</div>
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