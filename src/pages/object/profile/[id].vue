<template>
  <div>
    <el-card class="mb-2.5">
      <div class="profile-detail-card mb-2.5">
        <div class="profile-img">
          <img src="@/assets/images/profile.png" alt="">
        </div>
        <div class="content">
          <div class="title">
            <span class="label text-lg">IMSI</span>：
            <b class="name text-lg mr-2.5">110110110</b>
            <el-tag type="danger" round >重点人</el-tag>
            <div class="right">
              <el-tooltip
                effect="dark"
                content="加入收藏"
                placement="top"
              >
                <el-button type="primary" text class="btn-icon">
                  <el-icon><Star /></el-icon>
                </el-button>
              </el-tooltip>
            </div>
          </div>
          <el-row :gutter="20" class="mb-2">
            <el-col :span="8">手机号：110110</el-col>
            <el-col :span="8">机主姓名：110110</el-col>
            <el-col :span="8">证件号码：110110</el-col>
          </el-row>
          <el-row :gutter="20" class="mb-2">
            <el-col :span="8">户籍地：110110</el-col>
            <el-col :span="8">最早发现时间：110110</el-col>
            <el-col :span="8">最新发现时间：110110</el-col>
          </el-row>
          <el-row>
            <el-col :span="24">IMEI：110110</el-col>
          </el-row>
        </div>
      </div>
      <el-row align="middle" justify="start">
        <el-radio-group v-model="range">
          <el-radio-button label="前一天" value="1"></el-radio-button>
          <el-radio-button label="前三天" value="2"></el-radio-button>
          <el-radio-button label="前一周" value="3"></el-radio-button>
          <el-radio-button label="自定义" value="4"></el-radio-button>
        </el-radio-group>
        <div class="ml-2.5" style="width: 280px">
          <el-date-picker
            v-model="rangeDate"
            type="daterange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </div>
      </el-row>
      <el-row :gutter="20" class="mt-2.5">
        <el-col :span="12">
          <el-card style="height: 150px">
            <WordCloud />
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card style="height: 150px">
            <el-row>
              <el-button type="primary" class="btn-icon">
                <el-icon><Edit /></el-icon>
              </el-button>
              <div class="leading-6 ml-2.5" style="flex: 1; width: 0">
                中年男性，已婚，有子女，在广东省广州市越秀区生活。研究生学历，从事行业为医疗省委行业，职业为医生，在职状态。
上网时间集中在中午12点到13点、晚上8点到11点。日常出行以公共交通为主，周末出行以私家车为主。爱好广泛，热爱音乐、健身、球类运动。
喜欢炒股和基金.....
              </div>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <el-tabs v-model="tabName" type="card" class="header-button-group">
      <el-tab-pane label="应用分析" name="first">
        <el-card class="mb-2.5">
          <el-row>
            <el-card style="width: 430px; height: 790px; margin-right: 10px">
              <template #header>
                <el-radio-group v-model="appType">
                  <el-radio-button label="正常" value="1"></el-radio-button>
                  <el-radio-button label="非法" value="2"></el-radio-button>
                  <el-radio-button label="Unknow" value="3"></el-radio-button>
                </el-radio-group>
                <div class="right" style="width: 130px">
                  <el-select v-model="appObject">
                    <el-option label="网站" value="1"></el-option>
                  </el-select>
                </div>
              </template>
              <div class="apps-list-wrap">
                <ul class="apps-list">
                  <li
                    v-for="(item, index) in appsList"
                    :key="index">
                    <el-checkbox></el-checkbox>
                    <span class="index">{{ index + 1}}</span>
                    <span class="app-icon">
                      <img src="@/assets/images/logo.png" alt="">
                    </span>
                    <span class="app-name">{{ item.name }}</span>
                    <a class="count mr-1" href="javascript:;">{{ item.count }}</a>
                    <el-button type="primary" text class="btn-icon">
                      <el-icon><InfoFilled /></el-icon>
                    </el-button>
                  </li>
                </ul>
              </div>
            </el-card>
            <div style="flex: 1; width: 0;">
              <div style="height: 560px;">地图</div>
              <el-card class="mt-2.5" style="height: 220px;">
                时序图
              </el-card>
            </div>
          </el-row>
        </el-card>
        <el-row :gutter="10" style="height: 300px">
          <el-col :span="8">
            <el-card style="height: 100%">
              <template #header>
                <span>上网时段分析（分布）</span>
              </template>
              <TimeRangeChart />
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card style="height: 100%">
              <template #header>
                <span>场所分析</span>
              </template>
              <PieChart />
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card style="height: 100%">
              <template #header>
                <span>常用WiFi分析</span>
                <div class="right">
                  <el-icon><InfoFilled /></el-icon>
                </div>
              </template>
              柱图
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="轨迹分析" name="second">
        <div class="map-wrap">
          <el-card style="width: 400px; min-height: 300px; max-height: 730px">
            <template #header>
              <el-date-picker
                v-model="rangeDate"
                type="daterange"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                class="mr-2.5"
              />
              <div class="right">
                <el-button type="primary" class="btn-icon">
                  <el-icon><videoPlay /></el-icon>
                </el-button>
              </div>
            </template>
            <div class="info-list-wrap">
              <ul class="info-list map-list">
                <li v-for="(item, index) in trackMapList" :key="index">
                  <span class="index">{{ index + 1}}</span>
                  <div class="content">
                    <p class="truncate mb-1">{{ item.addr }}</p>
                    <p class="mb-1">应用：{{ item.app }}</p>
                    <p>时间：{{ item.time }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <el-pagination layout="prev, pager, next" :total="50" />
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="行为分析" name="third">
        <el-table :data="behaviorData">
          <el-table-column type="selection" width="60"></el-table-column>
          <el-table-column label="序号" type="index" width="60"></el-table-column>
          <el-table-column label="IMSI" prop="imsi"></el-table-column>
          <el-table-column label="网络服务名称" prop="netServiceName"></el-table-column>
          <el-table-column label="类型" prop="type"></el-table-column>
          <el-table-column label="网站域名" prop="domain"></el-table-column>
          <el-table-column label="应用属性">
            <template #default="scope">
              <el-tag v-if="scope.row.appProp.length <= 1" round>{{ scope.row.appProp[0] }}</el-tag>
              <el-popover
                v-else
                placement="right"
                trigger="hover"
              >
                <template #reference>
                  <el-badge :value="scope.row.appProp.length" :offset="[3, 10]">
                    <el-tag round>{{ scope.row.appProp[0] }}</el-tag>
                  </el-badge>
                </template>
                <p
                  class="leading-7"
                  v-for="(item, index) in scope.row.appProp"
                  :key="index">
                  <el-tag round>{{ item }}</el-tag>
                </p>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="访问次数" prop="visitCount"></el-table-column>
          <el-table-column label="基站/WIFI">
            <template #default="scope">
            </template>
          </el-table-column>
          <el-table-column label="访问时间" prop="visitedTime"></el-table-column>
        </el-table>
        <el-row class="mt-3" justify="center">
          <el-pagination layout="prev, pager, next" :total="50" />
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="同WIFI分析" name="fourth">
        <el-card>
          <el-radio-group v-model="wifiDataType" class="mb-2.5">
            <el-radio-button label="拓扑图" value="1"></el-radio-button>
            <el-radio-button label="列表" value="2"></el-radio-button>
          </el-radio-group>
          <div v-if="wifiDataType == 2">
            <el-table :data="wifiData">
              <el-table-column label="序号" type="index" width="60"></el-table-column>
              <el-table-column label="WiFi名称" prop="wifiName"></el-table-column>
              <el-table-column label="WiFi类型" prop="wifiType"></el-table-column>
              <el-table-column label="经纬度" prop="wifiSite"></el-table-column>
              <el-table-column label="相关联IMSI对象" prop="related_imsi_list">
                <template #default="scope">
                  {{ scope.row.related_imsi_list[0].name }}
                  <el-popover
                    v-if="scope.row.related_imsi_list.length > 1"
                    placement="right"
                    :width="200"
                    trigger="hover"
                  >
                    <template #reference>
                      <el-tag type="danger" effect="dark" round size="small">{{ scope.row.related_imsi_list.length }}</el-tag>
                    </template>
                    <p
                      class="leading-6"
                      v-for="(item, index) in scope.row.related_imsi_list"
                      :key="index">{{ item.name }}</p>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="最早发现时间" prop="first_discovered_time"></el-table-column>
              <el-table-column label="最近发现时间" prop="latest_discovered_time"></el-table-column>
            </el-table>
            <el-row class="mt-3" justify="center">
              <el-pagination layout="prev, pager, next" :total="50" />
            </el-row>
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import WordCloud from './WordCloud';
import TimeRangeChart from './TimeRangeChart';
import PieChart from './PieChart';

const range = ref('1')
const rangeDate = ref([])
const tabName = ref('first')
const appType = ref('1')
const appObject = ref('1')
const wifiDataType = ref('1')

const appsList = [
  {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }, {
    name: '微信',
    image: '@/assets/images/logo.png',
    count: 2022,
    checked: false
  }
]

const trackMapList = [
  {
    addr: 'XTTH239(广州第一人民医院广州第一人民医院广州第一人民医院)',
    app: '微信',
    date: '2020-06-21 12:30:10'
  }, {
    addr: 'XTTH239(广州第一人民医院)',
    app: '微信',
    date: '2020-06-21 12:30:10'
  }, {
    addr: 'XTTH239(广州第一人民医院)',
    app: '微信',
    date: '2020-06-21 12:30:10'
  }, {
    addr: 'XTTH239(广州第一人民医院)',
    app: '微信',
    date: '2020-06-21 12:30:10'
  }, {
    addr: 'XTTH239(广州第一人民医院)',
    app: '微信',
    date: '2020-06-21 12:30:10'
  }, {
    addr: 'XTTH239(广州第一人民医院)',
    app: '微信',
    date: '2020-06-21 12:30:10'
  }, {
    addr: 'XTTH239(广州第一人民医院)',
    app: '微信',
    date: '2020-06-21 12:30:10'
  }
]

const wifiData = [
  {
    wifiName: 'TJ_STAFF',
    wifiType: '公用',
    wifiSite: '10.123, 10.123',
    related_imsi_list: [
      {
        name: '1101101234'
      }, {
        name: '1101101234'
      }
    ],
    first_discovered_time: '2024-06-21 12:11:00',
    latest_discovered_time: '2024-06-21 12:11:00'
  }, {
    wifiName: 'TJ_STAFF',
    wifiType: '公用',
    wifiSite: '10.123, 10.123',
    related_imsi_list: [
      {
        name: '1101101234'
      }
    ],
    first_discovered_time: '2024-06-21 12:11:00',
    latest_discovered_time: '2024-06-21 12:11:00'
  }, {
    wifiName: 'TJ_STAFF',
    wifiType: '公用',
    wifiSite: '10.123, 10.123',
    related_imsi_list: [
      {
        name: '1101101234'
      }, {
        name: '1101101234'
      }, {
        name: '1101101234'
      }, {
        name: '1101101234'
      }
    ],
    first_discovered_time: '2024-06-21 12:11:00',
    latest_discovered_time: '2024-06-21 12:11:00'
  }, {
    wifiName: 'TJ_STAFF',
    wifiType: '公用',
    wifiSite: '10.123, 10.123',
    related_imsi_list: [
      {
        name: '1101101234'
      }, {
        name: '1101101234'
      }, {
        name: '1101101234'
      }, {
        name: '1101101234'
      }
    ],
    first_discovered_time: '2024-06-21 12:11:00',
    latest_discovered_time: '2024-06-21 12:11:00'
  }, {
    wifiName: 'TJ_STAFF',
    wifiType: '公用',
    wifiSite: '10.123, 10.123',
    related_imsi_list: [
      {
        name: '1101101234'
      }, {
        name: '1101101234'
      }, {
        name: '1101101234'
      }, {
        name: '1101101234'
      }
    ],
    first_discovered_time: '2024-06-21 12:11:00',
    latest_discovered_time: '2024-06-21 12:11:00'
  }
]

const behaviorForm = ref({
  net_name: '',
  type: '',
  range: [],
  appProp: ''
})

const behaviorData = [
  {
    imsi: '1101101234',
    netServiceName: '京东',
    type: 'APP',
    domain: 'jd.com',
    appProp: ['生活服务/购物'],
    visitCount: 12,
    baseStation: 'XTTH239',
    wifiName: 'TJ_STAFF',
    visitedTime: '2024-06-21 13:38:00'
  }, {
    imsi: '1101101234',
    netServiceName: '京东',
    type: 'APP',
    domain: 'jd.com',
    appProp: ['生活服务/购物', '生活服务/购物'],
    visitCount: 12,
    baseStation: 'XTTH239',
    wifiName: 'TJ_STAFF',
    visitedTime: '2024-06-21 13:38:00'
  }, {
    imsi: '1101101234',
    netServiceName: '京东',
    type: 'APP',
    domain: 'jd.com',
    appProp: ['生活服务/购物', '生活服务/购物', '生活服务/购物'],
    visitCount: 12,
    baseStation: 'XTTH239',
    wifiName: 'TJ_STAFF',
    visitedTime: '2024-06-21 13:38:00'
  }, {
    imsi: '1101101234',
    netServiceName: '京东',
    type: 'APP',
    domain: 'jd.com',
    appProp: ['生活服务/购物'],
    visitCount: 12,
    baseStation: 'XTTH239',
    wifiName: 'TJ_STAFF',
    visitedTime: '2024-06-21 13:38:00'
  }
]

</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;
.profile-detail-card {
  display: flex;
  padding: 10px 15px;
  background-color: #f7fbfc;
  border: 1px solid $border-color;
  border-radius: $radius-base;
  .profile-img {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 120px;
    border-radius: $radius-base;
    margin-right: 15px;
    overflow: hidden;
    img {
      min-width: 100%;
      min-height: 100%;
    }
  }
  .content {
    flex: 1;
    width: unset;
    .title {
      display: flex;
      align-items: center;
      .label {
        color: $regular;
      }
      .right {
        margin-left: auto;
      }
    }
  }
  .btn-icon {
    font-size: 20px;
  }
}
.apps-list-wrap {
  margin: -10px 0;
  .apps-list {
    li {
      display: flex;
      align-items: center;
      padding: 8px 0;
      cursor: pointer;
      .index {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: $radius-base;
        margin: 0 10px;
      }
      .app-icon {
        display: inline-block;
        height: 26px;
        width: 26px;
        border-radius: $radius-base;
        margin-right: 10px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .count {
        color: $primary;
        margin-left: auto;
      }
      & + li {
        border-top: 1px solid $border-color;
      }
    }
  }
}
.info-list-wrap {
  .info-list {
    li {
      display: flex;
      align-items: center;
      padding: 8px 0;
      cursor: pointer;
      .index {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: $radius-base;
        margin-right: 10px;
      }
      .content {
        flex: 1;
        width: 0;
      }
      & + li {
        border-top: 1px dashed $border-color;
      }
    }
    &.map-list {
      li {
        align-items: flex-start;
        .index {
          flex-shrink: 0;
          color: #fff;
          font-size: 12px;
          width: 23px;
          height: 33px;
          line-height: 24px;
          text-align: center;
          background: url(@/assets/images/mark-orange.png) no-repeat 0 0;
          margin-right: 10px;
        }
        &:hover,
        &.active {
          .index {
            background-image: url(@/assets/images/mark-blue.png);
          }
        }
      }
    }
  }
}

</style>
