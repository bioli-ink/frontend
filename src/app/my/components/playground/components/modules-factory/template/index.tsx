import { Card, CardBody } from '@heroui/card';
import { Switch } from '@heroui/switch';
import { Tooltip } from '@heroui/tooltip';
import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import DeleteContent from '@/app/components/delete/content';
import { MODULE_TITLE_MAP } from '@/app/my/constant/module';
import { updateUserModule } from '@/app/my/redux/my';
import { cls } from '@/app/utils/string';

import { TEMPLATE_TOOLS } from './config';
import style from './template.module.scss';
import { ModuleTemplateProps } from './types';

export default function ModuleTemplate({
  index,
  icon,
  type,
  coreContent,
  settingContent,
  settingExpanded,
  tips
}: ModuleTemplateProps) {
  const dispatch = useDispatch();
  // 配置区域是否展开
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(false);
  // 是否展示配置区域，单独使用变量控制，这样可以让动画和展示区分开
  const [showSetting, setShowSetting] = useState(false);
  // 内部变量或参数有一个是 true 的情况下，就可以打开设置区域
  const realSettingExpanded = Boolean(isSettingsExpanded || settingExpanded);
  const hasSettings = useMemo(() => {
    return Boolean(settingContent);
  }, [settingContent]);

  useEffect(() => {
    // 等动画结束再隐藏设置区域
    setTimeout(() => {
      setShowSetting(realSettingExpanded);
    }, realSettingExpanded ? 0 : 300);
  }, [realSettingExpanded]);

  const onRemoveHandler = () => {
    dispatch(updateUserModule({ index, action: 'delete' }));
  };
  const onToggleSettings = () => {
    setIsSettingsExpanded(!isSettingsExpanded);
  };

  return (
    <Card>
      <CardBody>
        <div className={style.main}>
          <div className={cls(style['drag-area'], 'template-drag-icon')}>
            <i className='iconfont-my icon-my-drag'></i>
          </div>

          <section className={style['settings-wrapper']}>
            <div className={style['core-wrapper']}>
              <div className={style['template-type']}>
                <i className={cls('iconfont-my', `icon-my-${icon || type}`)}></i>
                <span className={style['type-name']}>{MODULE_TITLE_MAP[type]}</span>
                {
                  tips ? (
                    <Tooltip
                      showArrow
                      content={<div className={style['tips-content']}>{tips}</div>}
                    >
                      <i className={cls('iconfont-my', 'icon-my-info', style['icon-tips'])}></i>
                    </Tooltip>
                  ) : null
                }
              </div>

              {coreContent}

              <div className={style['tools-wrapper']}>
                {
                  hasSettings ? (
                    <div
                      className={style.tool}
                      style={realSettingExpanded ? { color: 'var(--main-color)' } : {}}
                      title='配置'
                      onClick={onToggleSettings}
                    >
                      <i className='iconfont-my icon-my-settings'></i>
                    </div>
                  ) : null
                }
                
                {
                  TEMPLATE_TOOLS.map(tool => (
                    <div
                      key={tool.id}
                      className={cls(style.tool, tool.disabled ? style.disabled : '')}
                      title={tool.label}
                      onClick={tool.onClick}
                    >
                      <i className={cls('iconfont-my', `icon-my-${tool.icon}`)}></i>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className={style['action-wrapper']}>
              <div className={style['action-row']}>
                <i
                  className={
                    cls(
                      'iconfont-my',
                      'icon-my-share',
                      style.tool,
                      style.disabled,
                    )
                  }
                  title='分享'
                ></i>

                <Switch
                  defaultSelected
                  size='sm'
                  isDisabled
                  className={cls(style['template-visible'])}
                />
              </div>

              <div className={style['action-row']}>
                <i
                  className={
                    cls(
                      'iconfont-my',
                      'icon-my-add',
                      style.tool,
                      style.disabled,
                    )
                  }
                  title='新增'
                ></i>

                <DeleteContent triggerCls={style['action-delete']} onConfirm={onRemoveHandler} />
              </div>
            </div>
          </section>
        </div>

        {
          showSetting ? (
            <motion.div
              className={style.settings}
              initial={{ height: 0 }}
              animate={(realSettingExpanded) ? { height: 'auto' } : { height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={style['settings-title--wrapper']}>
                <span className={style['settings-title']}>配置</span>
                <i className={cls('iconfont-my', 'icon-my-close', style['icon-settings-close'])} onClick={onToggleSettings}></i>
              </div>

              <div className={style['settings-area']}>
                {settingContent}
              </div>
            </motion.div>
          ) : null
        }
        </CardBody>
      </Card>
    )
  }
