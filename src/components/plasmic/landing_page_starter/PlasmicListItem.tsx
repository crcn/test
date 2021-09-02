// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7n2qQ7qWbaSoTf29w3fMdw
// Component: TNcsFv7azbn4
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: 7n2qQ7qWbaSoTf29w3fMdw/projectcss
import * as sty from "./PlasmicListItem.module.css"; // plasmic-import: TNcsFv7azbn4/css

import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: obXil6sG5_gv/icon

export type PlasmicListItem__VariantMembers = {
  bottomBorder: "light" | "dark";
  leftCheck: "leftCheck";
};

export type PlasmicListItem__VariantsArgs = {
  bottomBorder?: SingleChoiceArg<"light" | "dark">;
  leftCheck?: SingleBooleanChoiceArg<"leftCheck">;
};

type VariantPropType = keyof PlasmicListItem__VariantsArgs;
export const PlasmicListItem__VariantProps = new Array<VariantPropType>(
  "bottomBorder",
  "leftCheck"
);

export type PlasmicListItem__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicListItem__ArgsType;
export const PlasmicListItem__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicListItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultListItemProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  bottomBorder?: SingleChoiceArg<"light" | "dark">;
  leftCheck?: SingleBooleanChoiceArg<"leftCheck">;
  className?: string;
}

function PlasmicListItem__RenderFunc(props: {
  variants: PlasmicListItem__VariantsArgs;
  args: PlasmicListItem__ArgsType;
  overrides: PlasmicListItem__OverridesType;
  dataFetches?: PlasmicListItem__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__bottomBorder_dark]: hasVariant(
          variants,
          "bottomBorder",
          "dark"
        ),
        [sty.root__bottomBorder_light]: hasVariant(
          variants,
          "bottomBorder",
          "light"
        ),
        [sty.root__leftCheck]: hasVariant(variants, "leftCheck", "leftCheck")
      })}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Something amazing",
        value: args.children,
        className: classNames(sty.slotChildren)
      })}

      {p.renderPlasmicSlot({
        defaultContents: (
          <Icon16Icon
            className={classNames(defaultcss.all, sty.svg__toZxN)}
            role={"img"}
          />
        ),

        value: args.slot
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicListItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicListItem__VariantsArgs;
    args?: PlasmicListItem__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicListItem__Fetches;
  } & Omit<PlasmicListItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicListItem__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicListItem__ArgProps,
      internalVariantPropNames: PlasmicListItem__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicListItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListItem";
  } else {
    func.displayName = `PlasmicListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicListItem = Object.assign(
  // Top-level PlasmicListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicListItem
    internalVariantProps: PlasmicListItem__VariantProps,
    internalArgProps: PlasmicListItem__ArgProps
  }
);

export default PlasmicListItem;
/* prettier-ignore-end */