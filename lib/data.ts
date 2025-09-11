import { User, Post, Comment, Follow, Notification } from '@/types';

// Mock data service - replace with real API calls
class DataService {
  private users: User[] = [
    {
      id: '1',
      email: 'john@example.com',
      username: 'johndoe',
      displayName: 'John Doe',
      profilePicture: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Software developer from Kampala. Love building apps and exploring Uganda! 🇺🇬',
      dateOfBirth: new Date('1990-05-15'),
      gender: 'male',
      district: 'Kampala',
      followerCount: 234,
      followingCount: 89,
      isVerified: true,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      email: 'jane@example.com',
      username: 'janesmith',
      displayName: 'Jane Smith',
      profilePicture: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Artist and photographer capturing the beauty of Uganda 📸✨',
      dateOfBirth: new Date('1992-08-22'),
      gender: 'female',
      district: 'Entebbe',
      followerCount: 567,
      followingCount: 123,
      isVerified: false,
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-10'),
    },
    {
      id: '3',
      username: 'markbusiness',
      displayName: 'Mark Okello',
      profilePicture: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Entrepreneur building the future in Entebbe 🚀',
      dateOfBirth: new Date('1988-12-03'),
      gender: 'male',
      district: 'Entebbe',
      followerCount: 892,
      followingCount: 45,
      isVerified: true,
      createdAt: new Date('2024-01-05'),
      updatedAt: new Date('2024-01-05'),
    }
  ];

  private posts: Post[] = [
    {
      id: '1',
      authorId: '2',
      author: this.users[1],
      content: 'Just captured this amazing sunset over Lake Victoria! Uganda is truly beautiful. 🌅 #Uganda #Photography #LakeVictoria',
      imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      status: 'approved',
      likeCount: 45,
      commentCount: 12,
      isLikedByUser: false,
      createdAt: new Date('2025-01-02T14:30:00'),
      updatedAt: new Date('2025-01-02T14:30:00'),
    },
    {
      id: '2',
      authorId: '1',
      author: this.users[0],
      content: 'Working on a new mobile app to help connect Ugandan small businesses with customers. Exciting times ahead! 📱💡 #TechInUganda #Innovation',
      status: 'approved',
      likeCount: 78,
      commentCount: 23,
      isLikedByUser: true,
      createdAt: new Date('2025-01-02T10:15:00'),
      updatedAt: new Date('2025-01-02T10:15:00'),
    },
    {
      id: '3',
      authorId: '3',
      author: this.users[2],
      content: 'Just launched our new co-working space in Entebbe! Come check us out if you\'re in the area. Supporting Uganda\'s growing startup ecosystem 🏢',
      imageUrl: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      status: 'approved',
      likeCount: 156,
      commentCount: 34,
      isLikedByUser: false,
      createdAt: new Date('2025-01-01T16:45:00'),
      updatedAt: new Date('2025-01-01T16:45:00'),
    }
  ];

  private comments: Comment[] = [
    {
      id: '1',
      postId: '1',
      authorId: '1',
      author: this.users[0],
      content: 'Absolutely stunning! Lake Victoria never gets old 😍',
      likeCount: 5,
      isLikedByUser: false,
      createdAt: new Date('2025-01-02T15:00:00'),
    },
    {
      id: '2',
      postId: '2',
      authorId: '2',
      author: this.users[1],
      content: 'This sounds amazing! Would love to beta test when it\'s ready 🙋‍♀️',
      likeCount: 8,
      isLikedByUser: true,
      createdAt: new Date('2025-01-02T11:30:00'),
    }
  ];

  private follows: Follow[] = [
    {
      id: '1',
      followerId: '1',
      followingId: '2',
      createdAt: new Date('2024-12-15'),
    },
    {
      id: '2',
      followerId: '2',
      followingId: '3',
      createdAt: new Date('2024-12-20'),
    }
  ];

  private notifications: Notification[] = [
    {
      id: '1',
      userId: '1',
      type: 'like',
      title: 'New Like',
      message: 'Jane Smith liked your post',
      isRead: false,
      relatedUserId: '2',
      relatedUser: this.users[1],
      relatedPostId: '2',
      createdAt: new Date('2025-01-02T16:00:00'),
    },
    {
      id: '2',
      userId: '1',
      type: 'follow',
      title: 'New Follower',
      message: 'Mark Okello started following you',
      isRead: false,
      relatedUserId: '3',
      relatedUser: this.users[2],
      createdAt: new Date('2025-01-02T14:00:00'),
    },
    {
      id: '3',
      userId: '1',
      type: 'comment',
      title: 'New Comment',
      message: 'Jane Smith commented on your post',
      isRead: true,
      relatedUserId: '2',
      relatedUser: this.users[1],
      relatedPostId: '2',
      createdAt: new Date('2025-01-01T18:00:00'),
    }
  ];

  async getPosts(tab: 'foryou' | 'following' = 'foryou', userId?: string): Promise<Post[]> {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    let filteredPosts = this.posts.filter(p => p.status === 'approved');
    
    if (tab === 'following' && userId) {
      const following = this.follows
        .filter(f => f.followerId === userId)
        .map(f => f.followingId);
      
      filteredPosts = filteredPosts.filter(p => following.includes(p.authorId));
    }
    
    return filteredPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getUserPosts(userId: string): Promise<Post[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return this.posts
      .filter(p => p.authorId === userId && p.status === 'approved')
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getUser(userId: string): Promise<User | null> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return this.users.find(u => u.id === userId) || null;
  }

  async searchUsers(query: string): Promise<User[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return this.users.filter(user => 
      user.displayName.toLowerCase().includes(searchTerm) ||
      user.username.toLowerCase().includes(searchTerm) ||
      user.bio?.toLowerCase().includes(searchTerm) ||
      user.district?.toLowerCase().includes(searchTerm)
    );
  }

  async searchPosts(query: string): Promise<Post[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return this.posts
      .filter(post => 
        post.status === 'approved' && (
          post.content.toLowerCase().includes(searchTerm) ||
          post.author.displayName.toLowerCase().includes(searchTerm) ||
          post.author.username.toLowerCase().includes(searchTerm)
        )
      )
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async getPostComments(postId: string): Promise<Comment[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return this.comments
      .filter(c => c.postId === postId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createPost(authorId: string, content: string, imageFile?: File, videoFile?: File, youtubeUrl?: string): Promise<Post> {
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const author = this.users.find(u => u.id === authorId);
    if (!author) throw new Error('Author not found');
    
    const newPost: Post = {
      id: Date.now().toString(),
      authorId,
      author,
      content,
      imageUrl: imageFile ? 'https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' : undefined,
      videoUrl: videoFile ? 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' : undefined,
      youtubeUrl: youtubeUrl || undefined,
      status: 'pending',
      likeCount: 0,
      commentCount: 0,
      isLikedByUser: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    this.posts.push(newPost);
    return newPost;
  }

  async addComment(postId: string, authorId: string, content: string): Promise<Comment> {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const author = this.users.find(u => u.id === authorId);
    if (!author) throw new Error('Author not found');
    
    const newComment: Comment = {
      id: Date.now().toString(),
      postId,
      authorId,
      author,
      content,
      likeCount: 0,
      isLikedByUser: false,
      createdAt: new Date(),
    };
    
    this.comments.push(newComment);
    
    // Update post comment count
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.commentCount += 1;
    }
    
    return newComment;
  }

  async toggleLike(postId: string, userId: string): Promise<{ liked: boolean; likeCount: number }> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const post = this.posts.find(p => p.id === postId);
    if (!post) throw new Error('Post not found');
    
    const wasLiked = post.isLikedByUser;
    post.isLikedByUser = !wasLiked;
    post.likeCount += wasLiked ? -1 : 1;
    
    return {
      liked: post.isLikedByUser,
      likeCount: post.likeCount
    };
  }

  async toggleFollow(followerId: string, followingId: string): Promise<{ isFollowing: boolean; followerCount: number }> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const existingFollow = this.follows.find(
      f => f.followerId === followerId && f.followingId === followingId
    );
    
    if (existingFollow) {
      // Unfollow
      this.follows = this.follows.filter(f => f.id !== existingFollow.id);
      const user = this.users.find(u => u.id === followingId);
      if (user) user.followerCount -= 1;
      return { isFollowing: false, followerCount: user?.followerCount || 0 };
    } else {
      // Follow
      const newFollow: Follow = {
        id: Date.now().toString(),
        followerId,
        followingId,
        createdAt: new Date(),
      };
      this.follows.push(newFollow);
      const user = this.users.find(u => u.id === followingId);
      if (user) user.followerCount += 1;
      return { isFollowing: true, followerCount: user?.followerCount || 0 };
    }
  }

  async isFollowing(followerId: string, followingId: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    return this.follows.some(
      f => f.followerId === followerId && f.followingId === followingId
    );
  }

  async getNotifications(userId: string): Promise<Notification[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return this.notifications
      .filter(n => n.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async markNotificationAsRead(notificationId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.isRead = true;
    }
  }

  async markAllNotificationsAsRead(userId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    this.notifications
      .filter(n => n.userId === userId)
      .forEach(n => n.isRead = true);
  }
}

export const dataService = new DataService();