// regular css imports
declare module "*.css";

// css module type declarations
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
