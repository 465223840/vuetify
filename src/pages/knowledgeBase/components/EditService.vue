<template>
  <el-drawer
    :model-value="modelValue"
    title="编辑网络服务"
    direction="rtl"
    size="50%"
  >
    <el-form :model="serviceForm" label-position="top">
      <el-row :gutter="30">
        <el-col :span="8">
          <el-form-item label="显示名称：">
            <el-input v-model="serviceForm.name"></el-input>
          </el-form-item>
          <el-form-item label="类型：">
            <el-radio-group v-model="serviceForm.type">
              <el-radio-button
                v-for="(opt, i) in typeOpts"
                :key="i"
                :label="opt.label"
                :value="opt.value"
              ></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="域名：">
            <el-input v-model="serviceForm.domain"></el-input>
          </el-form-item>
          <el-form-item label="包名：">
            <el-input v-model="serviceForm.packageName"></el-input>
          </el-form-item>
          <el-form-item label="开发厂商：">
            <el-input v-model="serviceForm.devCompany"></el-input>
          </el-form-item>
          <el-form-item label="图标：">
            <el-upload
              class="app-uploader"
              action="###"
              :show-file-list="false"
            >
              <img v-if="serviceForm.imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="app-uploader-icon">
                <Plus />
              </el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item label="描述：">
            <el-input
              v-model="serviceForm.devCompany"
              type="textarea"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="关联属性：">
            <el-tag
              v-for="tag in serviceForm.relatedAttrs"
              :key="tag"
              type="primary"
              >{{ tag }}</el-tag
            >
            <el-input
              class="mb-2.5"
              v-model="relatedAttrsFilter"
              style="width: 100%"
            ></el-input>
            <RelatedAttrInput :relatedAttrs="serviceForm.relatedAttrs" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <div style="flex: auto">
        <el-button size="large">取消</el-button>
        <el-button size="large" type="primary">确认</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup>
import RelatedAttrInput from "./RelatedAttr";
const props = defineProps({
  modelValue:{
    type:Boolean,
    default:false
  },
  serviceForm: {
    type: Object,
    // required: true,
    default: () => {
      return {
        name: "",
        type: "",
        domain: "",
        packageName: "",
        devCompany: "",
        imageUrl: "",
        desc: "",
        relatedAttrs: [],
      };
    },
  },
});

const emit = defineEmits(['update:modelValue'])

const modelValue = computed(()=>props.modelValue)

const serviceForm = ref(props.serviceForm);

const relatedAttrsFilter = ref("");

const typeOpts = [
  {
    label: "全部",
    value: "1",
  },
  {
    label: "网站",
    value: "2",
  },
  {
    label: "应用",
    value: "3",
  },
  {
    label: "小程序",
    value: "4",
  },
];
</script>

<style lang="scss" scoped>
</style>
