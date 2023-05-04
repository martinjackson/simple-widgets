# Page Title

This will place a banner on the screen that indicates the title of the page.  The banner will have the following CSS properties (most important ones):

1.  background color: rgb(0, 124, 186)
2.  text color: white
3.  font size: 24pt
4.  line height: 1.2
5.  text align: left
6.  border style: solid

## Props
1.  ***title*** = the title that is on the banner.

## CSS Files

## sw-pageTitle.css

The classes in the file are:

1. ***sw-pt_banner*** = describes the characteristics of the banner.

```css
.sw-pt_banner {
    background-color: var(--sw-theme_bannerBackground);
    border-style: var(--sw-theme_bannerBorderStyle);
    border-width: var(--sw-theme_bannerBorderWidth);
    border-color: var(--sw-theme_bannerBackground);
    margin: var(--sw-theme_bannerMargin);
}
```

2.  ***sw-pt_bannerFont*** = describes the font used in the banner

```css
.sw-pt_bannerFont {
    font-family: var(--sw-theme_font);
    font-size: var(--sw-theme_bannerFontSize);
    color: var(--sw-theme_bannerTextColor);
    font-weight: var(--sw-theme_bannerFontWeight);
    font-style: var(--sw-theme_bannerStyle);
    text-align: var(--sw-theme_bannerTextAlign);
    padding: var(--sw-theme_bannerPadding);
    line-height: var(--sw-theme_bannerLineHeight);
    overflow-y: var(--sw-theme_bannerOverFlowY);
}
```

#### CSS Variables

```css
:root {
    --sw-pt_bannerBackground: rgb(0, 124, 186);
    --sw-pt_bannerTextColor: rgb(255, 255, 255);
    --sw-pt_bannerBorderStyle: solid;
    --sw-pt_bannerBorderWidth: 30px;
    --sw-pt_bannerMargin: 0px;
    --sw-pt_bannerFontSize: 24pt;
    --sw-pt_bannerFontWeight: normal;
    --sw-pt_bannerStyle: normal;
    --sw-pt_bannerTextAlign: left;
    --sw-pt_bannerPadding: 5px;
    --sw-pt_bannerLineHeight: 1.2;
    --sw-pt_bannerOverFlowY: hidden;
 }
```

### Example

```javascript
import { PageTitle } from 'simple-widgets';

<div>
    <PageTitle title="This is a banner test" />
</div>
```

This will print a banner with a title of This is a banner test.