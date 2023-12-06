import { defineStore } from 'pinia';
import axios from 'axios';
import type { IPostItem } from '~/types/postItem';
import type { ViewModeType } from '~/types/viewMode';

export const useStore = defineStore('store', {
    state: () => ({
        _posts: [] as IPostItem[],
        _selectedPostId: null as number | null,
        _viewMode: 'grid' as ViewModeType,
        _currentPage: 1,
        _itemsPerPage: 12,
        _searchTerm: '',
    }),

    actions: {
        async fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                this._posts = response.data;
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },

        selectPost(postId: number | null) {
            this._selectedPostId = postId;
        },

        setViewMode(mode: ViewModeType) {
            this._viewMode = mode;
        },


        setCurrentPage(pageNumber: number) {
            this._currentPage = pageNumber;
        },

        setSearchTerm(term: string) {
            this._searchTerm = term;
            this._currentPage = 1; // Сброс текущей страницы при изменении поискового запроса
        },
    },

    getters: {
        paginatedPosts(): IPostItem[] {
            const startIndex = (this._currentPage - 1) * this._itemsPerPage;

            return this.filteredPosts.slice(startIndex, startIndex + this._itemsPerPage);
        },

        filteredPosts(): IPostItem[] {
            if (!this._searchTerm) {
                return this._posts;
            }

            const term = this._searchTerm.toLowerCase();

            return this._posts.filter((post) => {
                const idString = String(post.id);
                const userIdString = String(post.userId);

                return Object.values(post).some((value) => {
                    if (typeof value === 'string') {
                        return (
                            value.toLowerCase().includes(term) ||
                            idString.toLowerCase().includes(term) ||
                            userIdString.toLowerCase().includes(term)
                        );
                    }

                    return false;
                });
            });
        },

        totalPages(): number {
            return Math.ceil(this.filteredPosts.length / this._itemsPerPage);
        },

        selectedPost(): IPostItem | null {
            return this._selectedPostId
                ? this._posts.find((post) => post.id === this._selectedPostId) || null
                : null;
        },

        viewMode() :ViewModeType {
            return this._viewMode;
        },

        currentPage() :number {
            return this._currentPage;
        }
    },
});
