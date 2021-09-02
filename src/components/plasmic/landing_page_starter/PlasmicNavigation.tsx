// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7n2qQ7qWbaSoTf29w3fMdw
// Component: 9zyDsnm4C_yB
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
import Logo from "../../Logo"; // plasmic-import: uFEl3G2P0iS8/component
import Button from "../../Button"; // plasmic-import: pvEDofsnRpb1/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 7JAIBK6bs3Uw/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: 7n2qQ7qWbaSoTf29w3fMdw/projectcss
import * as sty from "./PlasmicNavigation.module.css"; // plasmic-import: 9zyDsnm4C_yB/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 2UUbeI57eEFB/icon

export type PlasmicNavigation__VariantMembers = {
  dark: "dark";
  centered: "centered";
  hideCta: "hideCta";
  lightBg: "lightBg";
};

export type PlasmicNavigation__VariantsArgs = {
  dark?: SingleBooleanChoiceArg<"dark">;
  centered?: SingleBooleanChoiceArg<"centered">;
  hideCta?: SingleBooleanChoiceArg<"hideCta">;
  lightBg?: SingleBooleanChoiceArg<"lightBg">;
};

type VariantPropType = keyof PlasmicNavigation__VariantsArgs;
export const PlasmicNavigation__VariantProps = new Array<VariantPropType>(
  "dark",
  "centered",
  "hideCta",
  "lightBg"
);

export type PlasmicNavigation__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNavigation__ArgsType;
export const PlasmicNavigation__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicNavigation__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultNavigationProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  dark?: SingleBooleanChoiceArg<"dark">;
  centered?: SingleBooleanChoiceArg<"centered">;
  hideCta?: SingleBooleanChoiceArg<"hideCta">;
  lightBg?: SingleBooleanChoiceArg<"lightBg">;
  className?: string;
}

function PlasmicNavigation__RenderFunc(props: {
  variants: PlasmicNavigation__VariantsArgs;
  args: PlasmicNavigation__ArgsType;
  overrides: PlasmicNavigation__OverridesType;
  dataFetches?: PlasmicNavigation__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__centered]: hasVariant(variants, "centered", "centered"),
        [sty.root__dark]: hasVariant(variants, "dark", "dark"),
        [sty.root__hideCta]: hasVariant(variants, "hideCta", "hideCta"),
        [sty.root__lightBg]: hasVariant(variants, "lightBg", "lightBg")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__w2DjP, {
          [sty.freeBox__centered__w2DjPFkOE]: hasVariant(
            variants,
            "centered",
            "centered"
          ),
          [sty.freeBox__dark__w2DjPk3W6Y]: hasVariant(variants, "dark", "dark")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Logo className={classNames("__wab_instance", sty.logo__tAok9)} />
          ),

          value: args.children
        })}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__oyaIj, {
            [sty.freeBox__centered__oyaIjFkOE]: hasVariant(
              variants,
              "centered",
              "centered"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <Button
                  className={classNames("__wab_instance", sty.button__cEqjm)}
                  navLink={"navLink" as const}
                  slot={"Services"}
                />

                <Button
                  className={classNames("__wab_instance", sty.button___6Fjw1)}
                  navLink={"navLink" as const}
                  slot={"Features"}
                />

                <Button
                  className={classNames("__wab_instance", sty.button__jhXK)}
                  navLink={"navLink" as const}
                  slot={"Company"}
                />

                <Button
                  className={classNames("__wab_instance", sty.button__rX9Cl)}
                  navLink={"navLink" as const}
                  slot={"Contact"}
                />

                <Button
                  className={classNames("__wab_instance", sty.button__ppuXe)}
                  navLink={"navLink" as const}
                  slot={"Log in"}
                />

                <Button
                  className={classNames("__wab_instance", sty.button__e6Dun)}
                  darkGray={"darkGray" as const}
                  slot={"Sign up"}
                />
              </React.Fragment>
            ),
            value: args.slot
          })}
        </p.Stack>

        {(hasVariant(variants, "centered", "centered") ? true : false) ? (
          <div
            className={classNames(defaultcss.all, sty.freeBox___7XDHi, {
              [sty.freeBox__centered___7XDHiFkOE]: hasVariant(
                variants,
                "centered",
                "centered"
              )
            })}
          >
            {(hasVariant(variants, "centered", "centered") ? false : true) ? (
              <button
                className={classNames(
                  defaultcss.button,
                  defaultcss.__wab_text,
                  sty.button___5Xu6,
                  {
                    [sty.button__centered___5Xu6FkOE]: hasVariant(
                      variants,
                      "centered",
                      "centered"
                    ),
                    [sty.button__dark___5Xu6K3W6Y]: hasVariant(
                      variants,
                      "dark",
                      "dark"
                    )
                  }
                )}
              >
                {"Sign up"}
              </button>
            ) : null}

            <Button
              className={classNames("__wab_instance", sty.button__vEa8Q, {
                [sty.button__dark__vEa8Qk3W6Y]: hasVariant(
                  variants,
                  "dark",
                  "dark"
                )
              })}
              dark={
                hasVariant(variants, "dark", "dark")
                  ? ("dark" as const)
                  : undefined
              }
              navLink={"navLink" as const}
              slot={"Log in"}
            />
          </div>
        ) : null}
      </p.Stack>
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
  PlasmicNavigation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavigation__VariantsArgs;
    args?: PlasmicNavigation__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavigation__Fetches;
  } & Omit<PlasmicNavigation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavigation__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavigation__ArgProps,
      internalVariantPropNames: PlasmicNavigation__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavigation__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavigation";
  } else {
    func.displayName = `PlasmicNavigation.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigation = Object.assign(
  // Top-level PlasmicNavigation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNavigation
    internalVariantProps: PlasmicNavigation__VariantProps,
    internalArgProps: PlasmicNavigation__ArgProps
  }
);

export default PlasmicNavigation;
/* prettier-ignore-end */
