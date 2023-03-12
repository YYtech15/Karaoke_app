import { useState } from "react";
import SearchTextField from '../utils/TextField/SearchTextField';

const posts = [
  {
    title: 'useStateの使い方',
    category: 'React'
  },
  {
    title: 'LaravelのMVCモデルについて',
    category: 'Laravel'
  },
  {
    title: '同一オリジンポリシーとCORS',
    category: 'Web'
  },
  {
    title: 'useEffectの使い方',
    category: 'React'
  }
]

const Sample = () => {
  const [showPosts, setShowPosts] = useState(posts);
  const [inputValue, setInputValue] = useState()

  // 検索欄への入力値をハンドリング
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
    search(e.target.value)
  }

  // 検索欄への入力値での絞り込み
  const search = (value: any) => {
    // 検索欄への入力が空の場合は早期return
    if (value === "") {
      setShowPosts(posts);
      return;
    }

    const serchedPosts = posts.filter(
      (post) =>
        Object.values(post).filter(
          (item) =>
            item !== undefined &&
            item !== null &&
            item.toUpperCase().indexOf(value.toUpperCase()) !== -1
        ).length > 0
    );

    setShowPosts(serchedPosts);
  }

  // カテゴリーリスト
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  // カテゴリー絞り込み
  const selectCategory = (category: any) => {
    // allを選択した場合は早期return
    if (category === "all") {
      setShowPosts(posts);
      return;
    }

    const selectedPosts = posts.filter((post) => post.category === category);
    setShowPosts(selectedPosts);
  };

  return (
    <div className="App">
      <h1>音楽一覧</h1>

      {/* フリーキーワード検索フォーム */}
      <div>
        <h2>Search</h2>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>

      {/* カテゴリー選択ボタン */}
      <div>
        <h2>Category</h2>
        <button onClick={() => selectCategory("all")}>All</button>
        {categories.map((category) => (
          <button onClick={() => selectCategory(category)}>{category}</button>
        ))}
      </div>

      {/* 記事一覧表示 */}
      {showPosts.map((post, index) => {
        return (
          <div key={post.title}>
            <p>
              {index + 1}. {post.title}
            </p>
            <p>category:{post.category}</p>
          </div>
        );
      })}
      <SearchTextField />
    </div>
  );
};


export default Sample;