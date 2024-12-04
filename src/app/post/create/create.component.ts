import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../post';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {


  post: Post = {id: 0, userId: 0 , title: '', body: '' }
  form!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.params['postId'];

    if (postId) {
      this.isEditMode = true;
      this.postService.find(postId).subscribe((data: Post) => {
        this.post = data;
      });

    } else {
      this.isEditMode = false;
    }

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
      useId: new FormControl('', Validators.required)
    });

  }

  get f() {
    return this.form.controls;
  }

  submit() {

    if (this.isEditMode) {
      console.log(this.form.value);
      this.postService.update(this.post.id, this.form.value).subscribe((res: any) => {
        console.log('Post atualizado com sucesso!');
        this.router.navigateByUrl('');
      });

    } else {

      console.log(this.form.value);
      this.postService.create(this.form.value).subscribe((res: any) => {
        console.log('Post criado com sucesso!');
        console.log(this.form.value);
        this.router.navigateByUrl('');
      });
    }

  }
}
