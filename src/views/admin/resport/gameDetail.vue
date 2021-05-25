<template>
 <div >
   <b-modal id="modal-xl" size="xl"  > 
     <pre>{{chooseGameDetail}}</pre>
     <!-- <pre>{{gameDetailTitle}}</pre> -->

    <el-table
      :data="chooseGameDetail"
      border
      show-summary
      style="width: 100%">
      <el-table-column
        prop="tid"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="provider"
        label="供應商">
      </el-table-column>
      <el-table-column
        prop="player"
        sortable
        label="玩家">
      </el-table-column>
      <el-table-column
        prop="currency"
        sortable
        label="貨幣">
      </el-table-column>
      <el-table-column
        prop="surplus"
        sortable
        label="利潤">
      </el-table-column>
    </el-table>
   </b-modal>
 </div>
</template>

<script>
import { array } from 'js-md5';

export default {
  props: {
    chooseGameDetail: {
      type: Array,
       default:()=> []
    },
  },
  data() {
    return {
    //  title:[]
    };
  },
  computed: {
    // gameDetailTitle:{
    //   get(){
    //     if(this.chooseGameDetail.length>0) {
    //       console.log('>0', this.chooseGameDetail)
    //       this.title = this.choosGameDetail
    //     }else{
    //       console.log('else', this.chooseGameDetail)
    //       this.title='asd'
    //     }
    //     return this.title;
    //   },
    // },
  },
}
</script>

<style scoped>


</style>

