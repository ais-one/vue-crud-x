<template>
  <div class="ds-stat-container">
    <a-row :gutter="8">
      <a-col class="ds-stat" :sm="24" :md="12" :xl="6">
        <a-card>
          <a-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#3f8600' }"
          >
            <template #prefix>
              <arrow-up-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col class="ds-stat" :sm="24" :md="12" :xl="6">
        <a-card>
          <a-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
            <template #prefix>
              <arrow-down-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>

      <a-col class="ds-stat" :sm="24" :md="12" :xl="6">
        <a-card>
          <a-statistic title="Active Users" :value="112893" />
        </a-card>
      </a-col>
      <a-col class="ds-stat" :sm="24" :md="12" :xl="6">
        <a-card>
          <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
        </a-card>
      </a-col>
    </a-row>

    <a-row :gutter="8">
      <a-col class="ds-stat" :lg="24" :xl="16">

      <a-row :gutter="8">
        <a-col class="ds-stat" :span="12">
          <a-page-header title="Team Members" />
          <a-list :grid="{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-card :bordered="false">
                  <a-avatar :size="64">
                    <template #icon><UserOutlined /></template>
                  </a-avatar>
                  <a-card-meta>
                    <template #title><span>{{ item.name }}</span></template>
                    <template #description><span style="font-size: 0.8em;">{{ item.title }}</span></template>
                  </a-card-meta>
                </a-card>
              </a-list-item>
            </template>
          </a-list>
        </a-col>
        <a-col class="ds-stat" :span="12">
          <a-page-header title="Comments" />
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-col>

        <a-col class="ds-stat" :span="24">
          <a-page-header title="Faked Quality" />
          <MultiChart />
        </a-col>
        <a-col class="ds-stat" :span="24">
        </a-col>
      </a-row>

      </a-col>

      <a-col class="ds-stat" :lg="24" :xl="8">
        <a-row :gutter="8">
          <a-col class="ds-stat" :span="24">
            <a-page-header title="Pie Quality" sub-title="Some other random description here. Does not have to be too long a text..." />
            <PieChart />
          </a-col>
          <a-col class="ds-stat" :span="24">
            <a-page-header title="Useful Links" />
            <a-skeleton :paragraph="{ rows: 3 }" />
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { LikeOutlined, ArrowUpOutlined, ArrowDownOutlined, UserOutlined } from '@ant-design/icons-vue'
import MultiChart from '../../components/Dashboard/MultiChart.vue'
import PieChart from '../../components/Dashboard/PieChart.vue'

const data = [
  { name: 'Anthony', title: 'Fullstack Dev', },
  { name: 'Joseph', title: 'QA Tester', },
  { name: 'Valerian', title: 'UX Expert', },
  { name: 'Hera', title: 'Data Scientist', },
];

export default {
  components: {
    LikeOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
    UserOutlined,

    PieChart,
    MultiChart
  },
  setup() {
    return {
      data,
    }
  }
}
</script>

<style>
.ds-stat {
  margin-top: 0px;
  padding-top: 0px;
  /* background-color: lightslategray; */
}

.ds-stat-container {
  /* background: #ececec; */
  padding: 0;
}

.ant-card-meta-title {
  margin-bottom: 0 !important;
}

.ant-card-body {
  /* justify-content: center !important; */
  text-align: center;
}
</style>