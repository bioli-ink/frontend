export const joint = ({ data = [], separator = ' ' }: { data: string[]; separator?: string }) => {
  return data.join(separator);
};

export const cls = (...args: string[]) => {
  return joint({ data: args });
};

/**
 * 移除文件扩展名
 */
export const removeExt = (ext: string) => {
  return ext.replace(/\.([\da-zA-Z]*)$/, '');
}
