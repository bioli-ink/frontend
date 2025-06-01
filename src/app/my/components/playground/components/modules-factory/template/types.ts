import { ModuleType } from '@/app/types/my/module';

export interface ModuleTemplateProps {
  // 当前索引
  index: number;

  // 模板类型
  type: ModuleType;

  // 核心配置内容
  coreContent?: React.ReactNode;

  // 自定义设置区域
  settingContent?: React.ReactNode;

  // 图标名称，如果没传就用 type
  icon?: string;

  // 调用方控制是否打开设置区域
  settingExpanded?: boolean;

  // 标题右侧的 tips
  tips?: string;
}

export interface TemplateTool {
  id: string;
  icon: string;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}
