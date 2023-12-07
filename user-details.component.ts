import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    user: any;
    posts: any[];
    userId: number;

    constructor(private route: ActivatedRoute, private userService: UserService) { }

    ngOnInit() {
        this.userService.currentUserId.subscribe(userId => {
            this.userId = userId;
            this.loadUserDetails();
        });
    }

    showUserPosts() {
        console.log('Show user posts');
    }

    loadUserDetails() {
        this.userService.getUser(this.userId).subscribe(user => this.user = user);
        this.userService.getUserPosts(this.userId).subscribe(posts => this.posts = posts);
    }
}
