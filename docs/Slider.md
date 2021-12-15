# Slider

This will allow the user to create a slider to specify a range of values to be selected by sliding the slider.  The value to the right of the slider will display the value of the slider.  The following are the possible sliders that are available:

![Sliders](./slider.png)

The different CSS files allow you to select a slider.  The user can create their own slider with a CSS file.

## Props

1. start = the first value the slider can have.  The default is 0.
2. end = the last value the slider can have.  The default is 100.
3. startValue = the starting value for the slider.  The default is 0.
4. noshow = if the prop is present, the value that is displayed to the right of the slider will not be displayed.

## CSS File

There are five CSS files names slider1.css to slider5.css.  The first file corresponds to the first slider displayed above, and so on.

To use one of the CSS Files, see [UsingCSS Files](./UsingCSS.md).

There are three basic classes in the CSS file:

1. ***slider_rangeValue*** = describes the formatting of the number to the right of the slider
2. ***slider_range*** = the css for the line that the slider slides on
3. ***slider_range::-webkit-slider-thumb*** = the css for the item that is slided

On the range and range::-webkit-slider-thumb the width, height, border radius, and colors should be changed.

## Example 1
```js
    <Slider />
```

This will display a slider based on the associated CSS file and will display the value of the slider to the right of it.  The slider will go from 0 to 100 and will start at 0.  The default of 0 is used for the start prop, since it was not specified.  The default of 100 is used for the end prop, since it was not specified.  The default of 0 is used for the startValue prop, since it was not specified.  The value of the slider will be to the right of the slider.

## Example 2
```js
    <Slider start="10" end="200" startValue="20" />
```

This will display a slider based on the associated CSS file and will display the value of the slider to the right of it.  The slider will go from 10 to 200 and will start at 20.  The value of the slider will be to the right of the slider.

## Example 3
```js
    <Slider end="200" noshow />
```

This will display a slider based on the associated CSS file and will display the value of the slider to the right of it.  The slider will go from 0 to 200 and will start at 0.  The default of 0 is used for the start prop, since it was not specified.  The default of 0 is used for the startValue prop, since it was not specified.  The value of the slider will ***NOT*** be displayed to the right of the slider, because of the noshow.

## Example 4
```js
    let begin = 10;
    let end = 200;
    let starting = 20;
    ...
    <Slider start={begin} end={end} startValue={starting}>
```

This will display a slider based on the associated CSS file and will display the value of the slider to the right of it.  The slider will go from 10 to 200 and will start at 20.  The value of the slider will be to the right of the slider.
