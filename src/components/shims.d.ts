// src/shims.d.ts

// Declare .vue files as having any type
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<any, any, any>;
    export default component;
  }
  
  // Declare .ts files as having any type
  declare module '*.ts' {
    const content: any;
    export default content;
  }
  