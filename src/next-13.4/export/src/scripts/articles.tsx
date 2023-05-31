const isProd = process.env.NODE_ENV === 'production';

export type typeArticle = {
  label: string;
  href: string;
};

export const articles = [{
  label: '1',
  href: (isProd ? '/next-13-4/export' : '') + '/articles/1'
}, {
  label: '2',
  href: (isProd ? '/next-13-4/export' : '') + '/articles/2'
}, {
  label: '3',
  href: (isProd ? '/next-13-4/export' : '') + '/articles/3'
}];