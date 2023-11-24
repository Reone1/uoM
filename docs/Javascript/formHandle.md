# form html handle with js

html form element를 사용하면서 form submit event를 통해 데이터를 제출하는 방법중 한가지를 설명입니다.

## Example

```html
<!DOCTYPE html>
<html>
  <head>Submit Test Component</head>
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

해당 제출 방식은 기존 `HTML Form`요소의 제출 방식을 그대로 사용하게 되며, 특정 페이지로 `routing을` 변경하는 방식으로 제출한다.

제출된 데이터는 form 내부에 있는 `input의` `value값들로` 설정되어있으며, **Field의 name을 key로** 가지고 있는 JSON형식의 데이터를 해당 라우팅으로 변경하며 제출하게 된다.

때문에, 라우팅 변경하는 과정을 막기 위해서는 form의 기본 이벤트 요청을 막는 `preventDefault`메서드를 통해서 내가 원하는 방식의 제출을 적용해야 한다.

