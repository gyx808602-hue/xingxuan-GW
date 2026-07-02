import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main homepage sections for xingxuan', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: '让技术能力成为品牌增长与产品表达的核心引擎'
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '技术能力' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '围绕官网、产品与品牌表达构建技术能力' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '适合科技型团队的三类基础页面方案' })).toBeInTheDocument();
    expect(screen.getByText(/hello@xingxuan\.tech/)).toBeInTheDocument();
  });
});
