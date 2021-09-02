// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7n2qQ7qWbaSoTf29w3fMdw
// Component: ggPVYPkpnqTc
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
import Navigation from "../../Navigation"; // plasmic-import: 9zyDsnm4C_yB/component
import Button from "../../Button"; // plasmic-import: pvEDofsnRpb1/component
import Divider from "../../Divider"; // plasmic-import: Rqd4TOdKp3dG/component
import Textinput from "../../Textinput"; // plasmic-import: FqpIcTR5Xsgw/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 7JAIBK6bs3Uw/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: 7n2qQ7qWbaSoTf29w3fMdw/projectcss
import * as sty from "./PlasmicHeroSection2.module.css"; // plasmic-import: ggPVYPkpnqTc/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 2UUbeI57eEFB/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: EIx_50oXLXpV/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: mMGJziJ_xoVs/icon
import image13NjMtOxJcmP5K from "./images/image13.svg"; // plasmic-import: NjMtOXJcmP5k/picture

export type PlasmicHeroSection2__VariantMembers = {};

export type PlasmicHeroSection2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeroSection2__VariantsArgs;
export const PlasmicHeroSection2__VariantProps = new Array<VariantPropType>();

export type PlasmicHeroSection2__ArgsType = {
  foreground?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHeroSection2__ArgsType;
export const PlasmicHeroSection2__ArgProps = new Array<ArgPropType>(
  "foreground",
  "children"
);

export type PlasmicHeroSection2__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  hero3?: p.Flex<"div">;
  img?: p.Flex<"img">;
  background3?: p.Flex<"div">;
  foreground?: p.Flex<"div">;
};

export interface DefaultHeroSection2Props {
  foreground?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicHeroSection2__RenderFunc(props: {
  variants: PlasmicHeroSection2__VariantsArgs;
  args: PlasmicHeroSection2__ArgsType;
  overrides: PlasmicHeroSection2__OverridesType;
  dataFetches?: PlasmicHeroSection2__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Navigation
              className={classNames("__wab_instance", sty.navigation__kINgW)}
              hideCta={"hideCta" as const}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__eTiL6)}
                role={"img"}
                src={image13NjMtOxJcmP5K}
              />
            </Navigation>
          ),

          value: args.children
        })}
      </div>

      <div
        data-plasmic-name={"hero3"}
        data-plasmic-override={overrides.hero3}
        className={classNames(defaultcss.all, sty.hero3)}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img)}
          role={"img"}
          src={
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" as const
          }
        />

        <div
          data-plasmic-name={"background3"}
          data-plasmic-override={overrides.background3}
          className={classNames(defaultcss.all, sty.background3)}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"foreground"}
          data-plasmic-override={overrides.foreground}
          hasGap={true}
          className={classNames(defaultcss.all, sty.foreground)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox___3C9A)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__eKzLs)}
                  >
                    <div
                      className={classNames(defaultcss.all, sty.freeBox__u6K4)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox___7EmT
                        )}
                      >
                        {"Updated!"}
                      </div>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__cfewm
                      )}
                    >
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                      >
                        <React.Fragment>{"Designs that "}</React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ textDecoration: "underline" }}
                        >
                          {"adapt"}
                        </span>
                      </span>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox___4Pg0X
                      )}
                    >
                      {
                        "Orci dui condimentum rutrum laoreet hac purus porta sem sem a vivamus a posuere vel molestie."
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__fuWcx)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__grwfv
                      )}
                      darkGray={"darkGray" as const}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox__yC6Ix
                          )}
                        >
                          {"Start now ->"}
                        </div>
                      }
                    />

                    <Button
                      bgDifference={"bgDifference" as const}
                      className={classNames("__wab_instance", sty.button__tz1G)}
                      darkGray={"darkGray" as const}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox__jxWss
                          )}
                        >
                          {"Learn more…"}
                        </div>
                      }
                    />
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__yi7TV)}
                >
                  <div
                    className={classNames(defaultcss.all, sty.freeBox__iQWgb)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.freeBox__fW1Z)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox___5Vcr8
                        )}
                      >
                        {"Sign up with"}
                      </div>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__aIr6N
                        )}
                      >
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__knGf4
                          )}
                          ouline={"ouline" as const}
                          slot={"Apple"}
                          startIcon={"startIcon" as const}
                        />

                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__uQm8N
                          )}
                          ouline={"ouline" as const}
                          slot={"Google"}
                          startIcon={"startIcon" as const}
                        >
                          <Icon6Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__u7N15
                            )}
                            role={"img"}
                          />
                        </Button>
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__pvcUa
                        )}
                      >
                        <Divider
                          className={classNames(
                            "__wab_instance",
                            sty.divider__tiw1Z
                          )}
                        />

                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox__yuGpe
                          )}
                        >
                          {"Or"}
                        </div>

                        <Divider
                          className={classNames(
                            "__wab_instance",
                            sty.divider__h1CGc
                          )}
                        />
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__ye0Cx
                        )}
                      >
                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__zQyDd
                          )}
                        />

                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__hb1S4
                          )}
                        />

                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__eZsNv
                          )}
                        />
                      </p.Stack>

                      <Button
                        children2={
                          <Icon5Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__pX5R
                            )}
                            role={"img"}
                          />
                        }
                        className={classNames(
                          "__wab_instance",
                          sty.button__uaw7X
                        )}
                        colors={"indigo" as const}
                        slot={"Start your account"}
                      />
                    </p.Stack>

                    <Divider
                      className={classNames(
                        "__wab_instance",
                        sty.divider__cWAd
                      )}
                    />

                    <div
                      className={classNames(defaultcss.all, sty.freeBox__zNorc)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__zW4FG
                        )}
                      >
                        {
                          "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
                        }
                      </div>
                    </div>
                  </div>
                </p.Stack>
              </React.Fragment>
            ),
            value: args.foreground
          })}
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "hero3", "img", "background3", "foreground"],
  freeBox: ["freeBox"],
  hero3: ["hero3", "img", "background3", "foreground"],
  img: ["img"],
  background3: ["background3"],
  foreground: ["foreground"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  hero3: "div";
  img: "img";
  background3: "div";
  foreground: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroSection2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroSection2__VariantsArgs;
    args?: PlasmicHeroSection2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeroSection2__Fetches;
  } & Omit<PlasmicHeroSection2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeroSection2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeroSection2__ArgProps,
      internalVariantPropNames: PlasmicHeroSection2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeroSection2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroSection2";
  } else {
    func.displayName = `PlasmicHeroSection2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroSection2 = Object.assign(
  // Top-level PlasmicHeroSection2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    hero3: makeNodeComponent("hero3"),
    img: makeNodeComponent("img"),
    background3: makeNodeComponent("background3"),
    foreground: makeNodeComponent("foreground"),

    // Metadata about props expected for PlasmicHeroSection2
    internalVariantProps: PlasmicHeroSection2__VariantProps,
    internalArgProps: PlasmicHeroSection2__ArgProps
  }
);

export default PlasmicHeroSection2;
/* prettier-ignore-end */
