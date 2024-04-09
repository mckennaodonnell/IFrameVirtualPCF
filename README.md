# iFrame PCF Code Component

![demo](/img/iFramePCF.gif)

The **iFrameVirtualPCF** code component provides a wrapper around the `<iframe>` [HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#positioning_and_scaling), providing a nested browsing context inside a Power Apps Canvas App or [Custom Page](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/add-page-to-model-app). 

This is a non-standard React ([virtual](https://powerapps.microsoft.com/en-us/blog/virtual-code-components-for-power-apps-using-react-and-fluent-ui-react-platform-libraries/)) code component. 

## Configuration
The control accepts the following properties:
### Properties
- **src** - URL of the webpage to embed
- **FullscreenButton** - sets the visibility of the [Full screen](https://docs.microsoft.com/en-us/power-apps/developer/component-framework/reference/mode/setfullscreen) button. This allows users to expand the iFrame to fit the screen of the host Canvas App (see the demo `.gif` above)

## Installation / Usage

There are two ways to install the PCF component. 
1. Download the managed solution from the [releases](https://github.com/iamgreggarcia/IFrameVirtualPCF/releases/) page of this repo
2. Clone and push the solution via the [MS Power Platform CLI](https://docs.microsoft.com/en-us/power-platform/developer/cli/introduction)

### Use Power Platform CLI

Make sure you have an [authentication profile](https://docs.microsoft.com/en-us/power-platform/developer/cli/reference/auth#pac-auth-create) configured.

Clone the repo:
```bash
git clone https://github.com/iamgreggarcia/IFrameVirtualPCF.git

cd IFrameVirtualPCF
```
Push the component to your chosen environment:
```bash
pac pcf push --publisher-prefix <your-publisher-prefix>
```

### Add component to a Canvas App
![use inside canvas apps](/img/iFrameAddComponent.gif)


## Limitations
* SharePoint URLs work inside custom pages but ***not*** Canvas Apps. This is because SharePoint (online) restricts cross-site scripting with powerapps.com. Read this helpful tutorial for more info: [SharePoint Document Library In A Power Apps Custom Page](https://www.matthewdevaney.com/sharepoint-document-library-in-a-power-apps-custom-page/)
