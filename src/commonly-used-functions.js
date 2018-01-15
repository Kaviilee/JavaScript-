var cuf = {
    // 去除空格 all:全部空格，between:前后空格，after:后空格，before:前空格
    trim: function(str, type) {
        switch (type) {
            case 'all':
              return str.replace(/\s+/g, '');
            case 'between': 
              return str.replace(/(^\s*)|(\s$)/g, '');
            case 'before':
              return str.replace(/(^\s*)/g, '');
            case 'after':
              return str.replace(/(\s*$)/g, '');
        }
    }
}