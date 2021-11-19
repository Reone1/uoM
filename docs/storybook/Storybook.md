# Storybook

**Storybook**은 UI Docs를 구성하는데 큰 도움을 주는 library입니다.
React를 통해 Component를 여러사람이 작업하게 되었을 때, 복수의 작업자는 공통된 컴포넌트나 비슷한 형태의 컴포넌트를 다른 이름으로 생성하게 되는 경우가 종종 발생합니다.

이러한 일을 방지하고 협업단계의 사용 가능한 Component reference를 확인할 수 있는 Doc를 형성하고
각 컴포넌트의 상태별 화면 구성 및 변화를 일괄적으로 파악하기 쉽게 구성되어 있습니다.

여러가지 add-on을 통해서 부가적인 기능을 설치해 사용할 수 있습니다.

## Storybook의 기능

단일 component rendering 통해 컴포넌트의 상태 변화와 기능적인 부분을 살펴볼 수 있습니다.
화면을 구성해야 컴포넌트를 확인할 수 있는 것과 다르게 story file을 생성함으로 써 컴포넌트를 직접 조작하는게 가능합니다.

```jsx
// Task.jsx
export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}
```

위와 같은, 테스크 input field 컴포넌트가 있다고 가정한다면,
다음과 같은 story 파일을 생성할 수 있습니다.

```jsx
// Task.stories.jsx

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
```

이처럼, `Template` 기능을 통해 컴포넌트의 여러가지 상태를 한번에 나누어 볼 수 있습니다.

`storybook-docs-addon`을 통해서 해당 component의 props의 type, requirement 등을 표시할 수 있습니다.

초기 컴포넌트의 상태를 내보낼 때, typeArg 값을 할당하여 조정이 가능합니다.

## 사용법

위의 예시를 통해 간단하게 살펴보면

```js
export default {
  component: Task,
  title: "Task",
};
```

이 부분은 현재 스토리파일의 component를 의미합니다.

`title`속성을 통해서 현재 component의 탭을 위치할 수 있습니다.

`title`은 다음과 같은 형식으로 작성해 categorize할 수 있습니다.

```js
export default {
  title: "atoms/Task",
};
```

이와 같은 방법의 categorize는 해당 컴포넌트를 한 폴더에 모아서 관리하는데 도움이 됩니다.

현재 컴포넌트를 할당 할 수 있습니다.

```js
export default {
  title: "atoms/Task",
  component: Task,
};
```

다음으로 argType을 설정할 수 있습니다.

```js
export default {
  title: "atoms/Task",
  component: Task,
  argType: {
    task: {
      name: 'task'
      type: {
        required: true
      }
      control: {
        type: 'select'
      }
      defatulValue: {
        id: "1",
        title: "Test Task",
        state: "TASK_INBOX",
        updatedAt: new Date(2021, 0, 1, 9, 0),
      },
    },
  },
};
```

- `argTypes`는 component의 props를 정의하고 `controls` 표시되는 내용을 정리하기 위한 내용입니다.
- `controls`는 storybook web상에서 component의 argument 변화를 인위적으로 변경할 수 있는 기능을 합니다.

- `control` 의 타입을 정하여 다양한 형태의 input을 조절하는 방식을 사용할 수 있습니다.
  toggle, range, color table등 여러가지 input source를 지원하기 때문에, component가 사용하는 argument의 값이 어떤 type인지에 따라서 control.type을 잘 정리해주면 사용하는데 큰 도움이 됩니다.

- `defaultValue`를 통해 기본값 설정을 할 수 있습니다.

- `name`은 argument의 control table name을 정의 합니다.  
  사용하지 않는경우 template의 arg key에 의해 결정 됩니다. 값을 비워 놓는경우 control table에 이름이 표시되지 않습니다.

- `type`은 현재 argument의 type을 정의합니다. 여기서의 type은 자료형을 뜻하지 **않습니다.**  
  argument를 표시할지, 변경 가능하게 할것인지 등 이러한 타입을 결정합니다.

## storybook의 장점

UI의 구성을 한눈에 확인하고 global style등의 style guide를 쉽게 정리할 수 있습니다.

디자인의 변경이 어떻게 발생하게 되는지 쉽게 눈으로 확인할 수 있습니다.

Docs를 통해 비개발자와 커뮤니케이션에도 큰 도움이 됩니다.

## storybook의 단점

아무래도 추가 개발이 필요한 부분이 있습니다.  
컴포넌트를 만들고, 테스트하고, 스토리북 구성하고 3단계의 component작업 과정이 들어갑니다.

현재는 atomic design pattern을 사용하고 있어
atom, molecule까지 Storybook에 추가하는 방식으로 진행하고 있습니다.

이후에는, atom 기준으로 storybook을 구성할 예정입니다.

프로젝트의 component구조가 복잡하게되면 어디까지 coverage를 가져가야 할지 전략적으로 구성할 필요가 있습니다.

## Conclusion

Storybook은 개발 이후에는 많은 사람에게 손쉽게 우리가 사용할 수 있는 컴포넌트의 종류를 안내하고 재사용성을 높이는데 큰 도움이 됩니다.

다만, 개발당시에는 많은 추가 공수가 필요하고, component의 변경이 많이 일어나는 경우에는 storybook의 수정 또한 잦을 수 있습니다.

이러한 이유로 이후 커뮤니케이션 비용을 생각해가면서 프로젝트에 꼭 필요한 부분인지 결정해야 합니다.

초기 개발단계의 디자인 가이드가 없이 시작하다 보니, 디자인 통일에 대한 필요성을 느꼇습니다.
때문에, storybook을 도입하고 view에서의 design 통일성을 팀원 모두와 공유할 수 있도록 사용할 예정입니다.
