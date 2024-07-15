const components = import.meta.glob('@/components.HUI/*.vue');

const install = (app) => {
  for (const path in components) {
    components[path]().then((module) => {
      // 获取组件的 PascalCase 命名
      const componentName = path
        .split('/')
        .pop()
        .replace(/\.\w+$/, '');

      // 注册组件
      app.component(componentName, module.default);
    });
  }
};

export default install;
