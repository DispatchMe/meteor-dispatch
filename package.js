Package.describe({
  name: 'dispatch:namespace',
  version: '0.0.1',
  summary: 'A dispatch namespace for other packages to use.',
  git: 'https://github.com/DispatchMe/meteor-dispatch-namespace.git'
});

Package.onUse(function (api) {
  api.addFiles('namespace.js');

  api.export('Dispatch');
});
