"use client"
import { IconButton, Tooltip } from "@mui/material"
import React from "react"
import { FooterSocial } from "./Footer"

const Socials = ({ data, isBrandA, hoverClass }: any) => (
    <div>
        <h4 className="font-bold mb-4">{!isBrandA ? "تابعنا" : "Follow Us"}</h4>
        <div className="flex gap-3 justify-center md:justify-start">
            {data?.socials?.map((social: FooterSocial, i: number) => (
                <Tooltip
                    key={i}
                    title={
                        !isBrandA ? `اذهب إلى ${social.label}` : social.label
                    }
                >
                    <IconButton
                        component="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${hoverClass} text-white`}
                    >
                        <i
                            className={social.icon + " text-white"}
                            aria-hidden="true"
                        ></i>
                    </IconButton>
                </Tooltip>
            ))}
        </div>
    </div>
)

export default Socials
