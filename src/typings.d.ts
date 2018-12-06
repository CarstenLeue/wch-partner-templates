/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}


declare module "*/.wchtoolsoptions.json" {
  const value: any;
  export default value;
}

declare module "*/site.json" {
  const value: any;
  export default value;
}

