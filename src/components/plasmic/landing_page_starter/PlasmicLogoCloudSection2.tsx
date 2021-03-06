// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7n2qQ7qWbaSoTf29w3fMdw
// Component: 5ZoT700l-v8r
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
import * as sty from "./PlasmicLogoCloudSection2.module.css"; // plasmic-import: 5ZoT700l-v8r/css

import loomsvg2ILCtQmw7Xxvv from "./images/loomsvg2.svg"; // plasmic-import: iLCtQMW7XXVV/picture
import strapisvg2WIdvep7XtZsO from "./images/strapisvg2.svg"; // plasmic-import: wIdvep7XTZsO/picture
import segmentsvg2AvkYeRcKpLta from "./images/segmentsvg2.svg"; // plasmic-import: avkYeRCKpLta/picture
import xstate1SvgT9GsDseDgGl from "./images/xstate1Svg.svg"; // plasmic-import: t9GS_DseDGGl/picture
import mapboxsvg2BEmzGc4Fz5Xr from "./images/mapboxsvg2.svg"; // plasmic-import: bEMZGc4Fz5Xr/picture

export type PlasmicLogoCloudSection2__VariantMembers = {};

export type PlasmicLogoCloudSection2__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogoCloudSection2__VariantsArgs;
export const PlasmicLogoCloudSection2__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLogoCloudSection2__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLogoCloudSection2__ArgsType;
export const PlasmicLogoCloudSection2__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicLogoCloudSection2__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultLogoCloudSection2Props {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicLogoCloudSection2__RenderFunc(props: {
  variants: PlasmicLogoCloudSection2__VariantsArgs;
  args: PlasmicLogoCloudSection2__ArgsType;
  overrides: PlasmicLogoCloudSection2__OverridesType;
  dataFetches?: PlasmicLogoCloudSection2__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__qQy6E)}
                role={"img"}
                src={loomsvg2ILCtQmw7Xxvv}
              />

              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__y2KKu)}
                role={"img"}
                src={strapisvg2WIdvep7XtZsO}
              />

              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__dg0I)}
                role={"img"}
                src={segmentsvg2AvkYeRcKpLta}
              />

              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__g0UDe)}
                role={"img"}
                src={xstate1SvgT9GsDseDgGl}
              />

              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__o3PmG)}
                role={"img"}
                src={mapboxsvg2BEmzGc4Fz5Xr}
              />
            </React.Fragment>
          ),
          value: args.children
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogoCloudSection2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogoCloudSection2__VariantsArgs;
    args?: PlasmicLogoCloudSection2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLogoCloudSection2__Fetches;
  } & Omit<PlasmicLogoCloudSection2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLogoCloudSection2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLogoCloudSection2__ArgProps,
      internalVariantPropNames: PlasmicLogoCloudSection2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLogoCloudSection2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogoCloudSection2";
  } else {
    func.displayName = `PlasmicLogoCloudSection2.${nodeName}`;
  }
  return func;
}

export const PlasmicLogoCloudSection2 = Object.assign(
  // Top-level PlasmicLogoCloudSection2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicLogoCloudSection2
    internalVariantProps: PlasmicLogoCloudSection2__VariantProps,
    internalArgProps: PlasmicLogoCloudSection2__ArgProps
  }
);

export default PlasmicLogoCloudSection2;
/* prettier-ignore-end */
