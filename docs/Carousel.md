# **Carousel**

This will allow the user to scroll through a series of pictures.  The Next button will take the user to the next picture, while previous button will go to the previous picture.  If the Next button is at the last picture, it will return to the first picture.  If the Previous button is at the first button, it will return to the last picture.

## **Props**
In order to use the carousel the user must pass the following props:

1. **display** = an array of objects that contains where the picture is and the alt value.  The object contains two fields: an image field that indicates where the picture is located and the alt field for the alt value.  The following is an example:

```js
    let carouselDisplay = [
      { image: './pics/beach3.jpg', alt: 'beach3' },
      { image: './pics/dolphin1.jpg', alt: 'dolphin1' },
      { image: './pics/dolphin2.jpg', alt: 'dolphin2' },
      { image: './pics/dolphin3.jpg', alt: 'dolphin3' },
    ];
```

The image field indicates where the picture is located.  The alt field is for the alt part of the image tag.  In the above example, there are 4 pictures.

2. **previous** = allows a name for the previous button.  The default is Previous, but the user can make it anything including unicode characters.
3. **next** = allows a name for the next button.  The default is Next, but the user can make it anything including unicode characters.
4. **width** = indicates the width of the picture.  The default is 100%.
5. **height** = indicates the height of the picture.  The default is 50%.

## CSS File

The following CSS file will need to be imported into your code that uses this Carousel component.  We did this so you can style the Carousel, any way you desire.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-carousel.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


## sw-carousel.css

The CSS class to style the button:

***sw-carousel_button*** = the style used for the Previous and Next buttons.

```css
.sw-carousel_button {
    text-align: left;
    font-family: var(--sw-theme_buttonFont);
    font-size: var(--sw-theme_buttonFontSize);
    font-weight: var(--sw-theme_buttonFontWeight);
    font-style: var(--sw-theme_buttonStyle);
    color: var(--sw-theme_buttonTextColor);
    border: var(--sw-theme_buttonBorder);
    border-radius: 10px;
    height: 3em;
    margin: var(--sw-theme_buttonMargin);
    padding: var(--sw-theme_buttonPadding);
    background-color: var(--sw-theme_buttonColor);
    align-self: center;
}

```

***sw-carousel_flex*** = used for the spacing of the Previous and Next buttons.  Previous on the left and Next on the right side of the picture.

```css
.sw-carousel_flex {
    display: flex;
    justify-content: space-between;
}

```

***sw-carousel_div*** = used for the overall width of the carousel.

```css
.sw-carousel_div {
    margin: 10px;
    width: 50%;
}

```


## **Example**
The following is a code example:

```javascript
    let carouselDisplay = [
      { image: './pics/beach3.jpg',   alt: 'beach3' },
      { image: './pics/dolphin1.jpg', alt: 'dolphin1' },
      { image: './pics/dolphin2.jpg', alt: 'dolphin2' },
      { image: './pics/dolphin3.jpg', alt: 'dolphin3' },
    ];
    ...
    return (
        <div>
            ...
            <Carousel display={carouselDisplay}>
            ...
        </div>
    );

When the carousel is displayed the beach3 picture will be displayed.  If the user presses the Next button, the dolphin1 picture will be displayed.

If the user is on dolphin3 and presses the Next button, it will display beach3.

If the user is on beach3 and presses the Previous button, it will display dolphin3.
