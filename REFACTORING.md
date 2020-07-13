# Refactoring Notes

- DataList
    - remoe Component from options in DataEntry
    - expose a `<Link />` and a `<ExternalLink />` Component that can be used in the render-function of the DataEntry Component, so we can remove the `link` and `isExternal` prop.