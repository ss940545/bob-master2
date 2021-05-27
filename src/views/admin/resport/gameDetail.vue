<template>
 <div >
   <b-modal  id="modal-xl"  size="xl" :title="chooseGameDetail[0].game">
    <div class="test">
       <p>ID:{{chooseGameDetail[0].tid}}</p> 
	    <p>{{chooseGameDetail[0].created_at}}</p>
 
    </div>
   
    <el-table
      v-if="this.page==1"
      :data="chooseGameDetail"
      border
      show-summary
      style="width: 100%">
      <el-table-column
        prop="game_id"
        :label='$t("cont.game_id")'
        width="180">
      </el-table-column>
      <el-table-column
        prop="in"
        :label='$t("cont.bet")'>
      </el-table-column>
      <el-table-column
        prop="out"
        sortable
        :label='$t("cont.out")'>
      </el-table-column>

      <!--  確認fee 是否api 一起給值?-->
      <el-table-column
        prop="currency"
        sortable
        label="fee">
      </el-table-column>

      <el-table-column
        prop="surplus"
        sortable
        :label='$t("cont.surplus")'>
      </el-table-column>
    </el-table>

	
    <el-table
      v-if="currentPage==2"
      :per-page="perPage"
      :data="tableData"
      border
      show-summary
      style="width: 100%">
      
      <el-table-column
        prop="line"
        :label='$t("cont.line")'
        width="180">
      </el-table-column>
      <el-table-column
        prop="items"
        :label='$t("cont.items")'
        width="180"
        >
         <img :src='items' alt="test">
      </el-table-column>
      <el-table-column
        prop="amount"
        :label='$t("cont.amount")'>
      </el-table-column>
       <el-table-column
        prop="win"
        :label='$t("cont.win")'>
      </el-table-column>
    </el-table>


  <!-- <b-table-simple  small caption-top responsive bordered v-if="currentPage==1">
    <b-thead head-variant="dark">
      <b-tr>
        <b-th>{{$t("cont.game_id")}}</b-th>
        <b-th>{{$t("cont.bet")}}</b-th>
        <b-th>{{$t("cont.out")}}</b-th>
        <b-th>fee</b-th>
        <b-th>{{$t("cont.surplus")}}</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr>
        <b-td>{{chooseGameDetail[0].game_id}}</b-td>
        <b-td>{{chooseGameDetail[0].in}}</b-td>
        <b-td >{{chooseGameDetail[0].out}}</b-td>
        <b-td>fee</b-td>
        <b-td >{{chooseGameDetail[0].surplus}}</b-td>
      </b-tr>
    </b-tbody>
    <b-tfoot>
      <b-tr>
        <b-td  >
          Total 
        </b-td>
        <b-td>{{chooseGameDetail[0].in}}</b-td>
        <b-td >{{chooseGameDetail[0].out}}</b-td>
        <b-td>fee</b-td>
        <b-td >{{chooseGameDetail[0].surplus}}</b-td>
      </b-tr>
    </b-tfoot>
 </b-table-simple> -->

  <!-- <b-table-simple  
  small caption-top responsive bordered >
    
    <b-thead >
      <b-tr>
        <b-th>線</b-th>
        <b-th>項目</b-th>
        <b-th>數量</b-th>
        <b-th>贏得</b-th>
      </b-tr>
    </b-thead>

    <b-tbody >
      <b-tr v-for="item in tableData" :key="item.line">
        <b-th>{{item.line}}</b-th>
         <b-th>{{item.items}}</b-th>
         <b-th>{{item.amount}}</b-th>
         <b-th>{{item.win}}</b-th>
      </b-tr>
    </b-tbody>
     <b-tfoot>
      <b-tr >
        <b-td colspan="3">
          Total 
        </b-td>
      
      </b-tr>
    </b-tfoot>
 </b-table-simple> -->



<!-- 頁面 -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
     
   </b-modal>

 </div>
</template>

<script>
import { array } from 'js-md5';

export default {
  props: {
    chooseGameDetail:{
      type: Array,
       default:()=> []
    },
  },
  data() {
		return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone','total':'10' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone','total':'10' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble','total':'10' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' ,'total':'10'},
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' ,'total':'10'},
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' ,'total':'10'},
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo','total':'10'},
        { id: 8, first_name: 'Rockhead', last_name: 'Slate','total':'10'},
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople','total':'10'},
      ],
      tableData: [{
        line: '2',
        items: '@/assets/spicyparty/0.png',
        count:'1',
        amount: '43',
        win:'111',
      }, {
        line: '2',
        items: '0.png',
        count:'1',
        items: '王小虎',
        amount: '43',
        win:'111',
      }, {
        line: '3',
         items: '0.png',
        count:'1',
        items: '王小虎',
        amount: '43',
        win:'111',
      }],

      freegame:[{
        line: '2',
        items: '王小虎',
        amount: '43',
        win:'111',
      }],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      page:'1'
		}
  },
  computed: {
    rows() {
      return this.items.length
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page= val;
      
    }
  },
  watch: {
    currentPage: {
      handler(val) {
        console.log('currentPage', val)
        this.page= JSON.stringify(val)
      },
      deep:true,
      
    }
  }
}
</script>

<style  lang="scss" scoped>

::v-deep #modal-xl___BV_modal_header_{
	color: #000;
  padding-bottom: 0;
  margin:  0;
  border: none;
  background: rgb(214, 212, 212);
  h5{
    padding-bottom: 0;
  }
}

::v-deep .test{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 ;
  background: rgb(214, 212, 212);
  margin: -1rem -1rem 2rem;
  padding: 0 1rem;
}
// ::v-deep span {
//     position: absolute;
//     top: -30px;
// }
// table,tr,td{
// 	border: 1px solid red;
// 	border-collapse: collapse;
	
// }
</style>
