<template>
  <div class="task-list">
    <div class="day-list" v-for="(item, index) in dateList" :key="index">
      <div :class="[item.time<nowDate? 'today header':'header']">
        <div class="date">{{transformTime(item.time)}}</div>
        <div>星期{{"日一二三四五六".charAt(new Date(item.time).getDay())}}(
            <span class="red">{{item.taskList.length}}</span>
          )</div>
      </div>
      <div class="content">
        <div class="task" v-for="(task, tindex) in item.taskList" :key="tindex">
          <div class="left-line"></div>
          <div class="right-content">
            <span>{{task.taskName}}</span>
            <span>{{transformTime(task.time,2)}}</span>
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
        nowDate: null,
        dateList: [
          {
            time: 1583683200000,
            taskList: [
              {
                time: 1583730000000,
                taskName: '任务一'
              },
              {
                time: 1583733600000,
                taskName: '任务二'
              },
              {
                time: 1583735400000,
                taskName: '任务三'
              },
            ]
          },
          {
            time: 1583769600000,
            taskList: [],
          },
          {
            time: 1583856000000,
            taskList: [],
          },
          {
            time: 1583942400000,
            taskList: [],
          },
          {
            time: 1584028800000,
            taskList: [
              {
                time: 1584068400000,
                taskName: '任务一'
              }
            ],
          },
          {
            time: 1584115200000,
            taskList: [],
          },
          {
            time: 1584201600000,
            taskList: [],
          },
        ]
      }
    },
    methods: {
      doubleNum(v) {
        return v < 10 ? '0' + v : v
      },
      transformTime(timestamp, type = 1) {
        if (timestamp) {
          let time = new Date(timestamp);
          let YY = time.getFullYear(); //getFullYear方法以四位数字返回年份
          let M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
          let D = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
          let h = time.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)
          let m = time.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
          let s = time.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
          let MM = this.doubleNum(M);
          let DD = this.doubleNum(D);
          let hh = this.doubleNum(h);
          let mm = this.doubleNum(m);
          let ss = this.doubleNum(s);

          if (type === 1) {
            return YY + '年' + MM + '月' + DD + '日';
          } else {
            return `${hh}:${mm}`;
          }
        } else {
          return '';
        }
      }
    },
    mounted() {
      this.nowDate = new Date().getTime();
    }
  }
</script>
<style scoped lang="less">
  .task-list {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    font-size: 0.12rem;
    .day-list{
      width: 14%;
      min-width: 1rem;
    }
    .header{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 0.1rem;
      border-bottom: 0.02rem solid gainsboro;
      &.today{
        color: #00c3f5;
        border-bottom: 0.02rem solid #00c3f5;
      }
    }
    .today+.content{
      border-left: 0.02rem dashed #00c3f5;
      border-right: 0.02rem dashed #00c3f5;
    }
    .content{
      box-sizing: border-box;
      width: 100%;
      padding: 0 0.05rem;
      font-size: 0.10rem;
      .task{
        height: 0.24rem;
        width: 100%;
        background: #00c3f5;
        color: blue;
        margin: 0.05rem 0;
        display: flex;
        .left-line{
          width: 0.03rem;
          height: 100%;
          background: blue;
        }
        .right-content{
          display: flex;
          flex-grow: 1;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.02rem;
        }
      }
    }
  }
  .red{
    color: red;
  }
</style>
