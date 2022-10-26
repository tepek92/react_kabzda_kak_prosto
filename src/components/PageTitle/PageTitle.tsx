import React, {memo} from "react";

type PageTitlePropsType = {
    title: string
};
export const PageTitle = memo((props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
});