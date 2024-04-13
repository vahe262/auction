import React, { useContext } from 'react'
import { Context } from '../Context'
import { color, fonts } from '../allLists'
import { BsWrenchAdjustableCircle } from "react-icons/bs"
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default function Settings() {
  const $ = useContext(Context)
  return (
    <div className='settings_container' style={{ display: $.settings ? 'flex' : 'none' }}>
      <div className='settings_item' style={{ left: $.settings ? '0' : '100%', boxShadow: $.bgcolor ? `-20px 0px 500px ${$.color_list}` : `-20px 0px 500px ${$.color_list}` }}>
        <IoChevronBackCircleOutline style={{ opacity: !$.cubicbeizer ? '1' : '1' }} onClick={() => {
          $.setSettings(!$.settings)
        }} />
        <div className='circle_cont' style={{ left: !$.cubicbeizer ? '0' : '100%' }}>
          <div className='menu_cont' ></div>
          <div className='menu'><BsWrenchAdjustableCircle /></div>
        </div>
        <h3 style={{ opacity: !$.cubicbeizer ? '1' : '0' }}>Web Color</h3>
        <div className='color_cont' style={{ left: !$.cubicbeizer ? '0' : '100%' }}>
          {color.map(color => {
            return <div className='color_item' style={{ background: color }} onClick={() => {
              $.setBgColor(!$.bgcolor)
              $.setColor_list(color)
            }} key={color} ></div>
          })}
        </div>
        <h3 style={{ opacity: !$.cubicbeizer ? '1' : '0' }} > Web Fonts</h3>
        <div className='fonts_cont' style={{ left: !$.cubicbeizer ? '0' : '100%' }}>
          {fonts.map((font) => (
            <div className='fonts_item' style={{ fontFamily: font }} onClick={() => {
              $.setWebfonts(!$.webfonts)
              $.setFonts_list(font)

            }}>Aa</div>
          ))}

        </div>
      </div>
    </div>
  )
}
