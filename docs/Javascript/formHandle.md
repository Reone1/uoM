# form html handle with js

html form element를 사용하면서 form submit event를 통해 데이터를 제출하는 방법중 한가지를 설명입니다.

## Example

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <form onSubmit="onSubmitHandler" name="exampleForm">
      <input name="firstName" type="text" />
    </form>
  </body>
</html>
<script>
  const onSubmitHandler = () => {
    const f = document.exampleForm;
    console.log(f.firstName.value);
  };
</script>
```
