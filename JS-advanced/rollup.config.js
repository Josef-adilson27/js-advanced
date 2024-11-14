
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: 'main.js', //главный файл  
  output: {
    file: 'dist/bundle.js', // bundle ложим в следущую директорию
    format: 'iife', 
    name: 'MyBundle',
  },
  plugins: [
    serve({
      open: true, 
      contentBase: ['dist'], // папка для обслуживания
      port: 3000,

    }),
    livereload('dist'), // выслеживаемая директория для live reload
  ],
};