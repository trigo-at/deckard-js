# Refactoring Notes

- DataList => DataEntry
    - remove `Component` prop (a render-function can be used as well)
    - remove the `link` and `isExternal` prop (a render-function can be used as well) expose the `<Link />` Component at `./components/link.tsx` and update all apps that are using the design system.