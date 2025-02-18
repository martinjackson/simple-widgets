# Page Title

This will place a banner on the screen that indicates the title of the page.  The banner will have the following CSS properties (most important ones):

1.  background color: rgb(0, 124, 186)
2.  text color: rgb(255, 255, 255)
3.  font size: 24pt
5.  text align: left
6.  align-items: center

## Props
1.  ***title*** = the title that is on the banner.
2.  ***smallTitle*** = a smaller title underneath the main banner title.  Will only appear if the smallTitle prop is used.

## CSS Files

## sw-pageTitle.css

The classes in the file are:

1. ***sw-pt_banner*** = describes the characteristics of the banner.

```css
.sw-pt_banner {
    display: flex;
    align-items: center;
    background-color: var(--sw-pt_bannerBackground); 
    border-radius: var(--sw-pt_bannerBorderRadius);
}
```

2.  ***sw-pt_bannerFont*** = describes the font used in the banner

```css
.sw-pt_bannerFont {
    font-family: var(--sw-pt_font);
    font-weight: var(--sw-pt_bannerFontWeight);
    font-style: var(--sw-pt_bannerStyle);
    color: var(--sw-pt_bannerTextColor);
    text-align: var(--sw-pt_bannerTextAlign);
    margin-left: var(--sw-pt_bannerMarginLeft);
    overflow-y: var(--sw-pt_bannerOverFlowY);
}
```

3.  ***sw-pt_bannerSmallFont*** = describes the font used for the small title.

```css
.sw-pt_bannerSmallFont {
    font-family: var(--sw-pt_font);
    color: var(--sw-pt_bannerTextColor);
    text-align: var(--sw-pt_bannerTextAlign);
    margin-left: var(--sw-pt_bannerMarginLeft);
    margin-bottom: var(--sw-pt_bannerMarginBottom);
    overflow-y: var(--sw-pt_bannerOverFlowY);
}
```

#### CSS Variables

```css
:root {
    --sw-pt_bannerBackground: rgb(0, 124, 186);
    --sw-pt_bannerTextColor: rgb(255, 255, 255);
    --sw-pt_bannerBorderRadius: 8px;
    --sw-pt_bannerFontSize: 24pt;
    --sw-pt_bannerFontWeight: normal;
    --sw-pt_bannerTextAlign: left;
    --sw-pt_bannerMarginLeft: 20px;
    --sw-pt_bannerMarginBottom: 10px;
    --sw-pt_bannerOverFlowY: hidden;
 }
```

### Example 1

```javascript
import { PageTitle } from 'simple-widgets';

<div>
    <PageTitle title="This is a banner test" />
</div>
```

This will print a banner with a title of This is a banner test.

### Example 2

```javascript
import { PageTitle } from 'simple-widgets';

<div>
    <PageTitle title="This is a banner test" smallTitle="This is a small title" />
</div>
```

This will print a banner with a title of This is a banner test and will then print a smaller title of This is a small title underneath the main title.