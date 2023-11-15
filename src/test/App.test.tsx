/* eslint-disable testing-library/no-render-in-setup */
//@ts-nocheck
import { render, screen } from '@testing-library/react';
import CreateNote from '../components/CreateNote';
import userEvent from '@testing-library/user-event';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import AddTags from '../components/AddTags';







const inputControlText = ({ title, body, tag }: object) => {
  const inputNewTitle = screen.getByRole("textbox", {
    name: /Title :/i,
  })
  const inputNewBody = screen.getByRole("textbox", {
    name: /Body :/i
  })
  const inputNewTags = screen.getByPlaceholderText("Add a Tag")



  if (title) {
    userEvent.type(inputNewTitle, title)
  }
  if (body) {
    userEvent.type(inputNewBody, body)
  }
  if (tag) {
    userEvent.type(inputNewTags, tag)
  }

  return {
    inputNewTitle,
    inputNewTags,
    inputNewBody
  }

}

const ControlBtnIsDisable = (btn: string) => {
  const submitBtnNewNote = screen.getByRole(btn)
  expect(submitBtnNewNote).not.toBe(isDisabled)
}


const toBe = (el, str) => {
  expect(el).toBe(str)
}

const notToBe = (el, str) => {
  expect(el).not.toBe(str)
}




describe("Input Control", () => {

  beforeEach(() => {
    render(<CreateNote />);
  })

  test('Inputs field should be initially embly', () => {
    const { inputNewTitle, inputNewTags, inputNewBody } = inputControlText({
      title: "",
      body: "",
      tag: ""
    })

    toBe(inputNewTitle.value, "")
    toBe(inputNewBody.value, "")
    toBe(inputNewTags.value, "")


  });

  test('Inputs field should be able to write', () => {

    const { inputNewTitle, inputNewBody } = inputControlText({
      title: "Text",
      body: "Text",
      tag: ""
    })

    toBe(inputNewTitle.value, "Text")
    toBe(inputNewBody.value, "Text")

  });



  test('Inputs length should be >  0 , button isAble', () => {

    const { inputNewTitle, inputNewBody } = inputControlText({
      title: "Text",
      body: "Text",
      tag: ""
    })

    notToBe(inputNewTitle.value, "")
    notToBe(inputNewBody.value, "")
    ControlBtnIsDisable("buttonSubmit")

  });

})

describe("test for Tags into newNote", () => {


  beforeEach(() => {
    render(<AddTags />);
  })


  test('should first', () => {

    const btn = screen?.getByRole("button")
    btn?.click()

  })


})