// TODO: functionality
// - [x] copy to clipboard
// - [x] success msg (update button icon)
// - [x] validate words count input (type number)
// - [...] init and update textarea on change words count

// main
////////////////////////////////////////////////////////////////////////////////
const loremString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet, dolor sed auctor varius, sapien nisi maximus leo, in placerat nisl neque eget velit. Aenean condimentum eu ligula ut auctor. Donec congue ex dictum, tincidunt mauris sit amet, posuere neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis facilisis tincidunt lorem id suscipit. Pellentesque ut dictum velit. Vivamus scelerisque interdum massa, a sollicitudin dolor cursus id. Maecenas lacus magna, porta id mi ac, consequat convallis nisi. Sed id est efficitur, ultrices mi sit amet, scelerisque nisl. Donec ut erat nulla. Fusce maximus odio interdum lorem sodales, vel ultrices elit condimentum. Cras tempor massa at mauris varius consectetur. Cras venenatis non leo a imperdiet. Sed vitae ligula molestie, aliquet lorem a, mollis arcu. Phasellus dignissim elit sollicitudin nibh condimentum, id elementum metus porta. Donec cursus nulla sed semper ultricies. Integer laoreet urna risus, eu porta orci ultricies sed. Sed condimentum laoreet tellus, non pretium tortor laoreet eu. Cras ullamcorper pellentesque turpis quis sagittis. Duis mollis erat sed mauris rutrum, non sagittis ipsum accumsan. Aliquam egestas velit tempor dui rutrum, non dapibus erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis volutpat id justo eu volutpat. Etiam pulvinar bibendum arcu sed vestibulum. Sed ultrices posuere augue efficitur egestas. Mauris pretium urna vitae malesuada iaculis. Nullam cursus sem ut interdum dapibus. Nunc vel ex et felis accumsan pulvinar. Proin non euismod diam. Ut posuere laoreet sapien a accumsan. Duis ac congue nisl, eget hendrerit eros. Aliquam tristique malesuada lorem, ut consectetur tellus tristique id. Maecenas eros enim, lacinia in venenatis at, sodales a mi. Pellentesque blandit, velit blandit eleifend fermentum, neque dui suscipit eros, eget sagittis lorem tellus et dui. Proin et mauris at nunc facilisis rhoncus. Proin eget lobortis lectus. Nullam lacinia gravida odio, a tristique neque. Nam rhoncus urna nec consequat bibendum. Fusce gravida feugiat nibh a sodales. Curabitur laoreet vehicula nisl et tincidunt. Aenean id tincidunt magna. Nam a augue sapien. Aenean a ex vitae ex eleifend facilisis quis vel neque. Mauris efficitur mollis tortor, vitae lacinia massa volutpat ut. Sed sagittis elementum scelerisque. Vivamus sit amet augue nisl. Donec porta dui a dui facilisis ultrices. Nulla mollis ex id aliquam hendrerit. Cras in euismod diam. Nam accumsan accumsan nunc, non blandit erat dictum quis. Nam eget varius sem, vitae aliquam odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin lacinia velit vel tellus congue, ut porttitor ex fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et magna orci. Praesent vitae tincidunt diam. Fusce volutpat mi augue, non dapibus massa lobortis non. Aliquam viverra in libero id convallis. Aliquam erat volutpat. Cras a hendrerit enim. Curabitur pharetra ex quis enim pellentesque molestie. Quisque eleifend risus et quam efficitur iaculis. Fusce auctor metus ultricies neque rutrum, eget scelerisque libero porttitor. Vivamus non metus posuere tellus laoreet bibendum dictum nec est. Etiam iaculis, purus eget vestibulum elementum, enim nisl vehicula felis, at sagittis felis metus in metus. Fusce sodales semper nisi porta vulputate. Quisque mauris felis, finibus ac mauris quis, varius imperdiet dolor. Fusce tempor porta nunc. Duis convallis et orci consectetur aliquam. Sed elementum in est sed varius. In hac habitasse platea dictumst. In facilisis interdum turpis. Quisque felis lacus, porta id diam eu, maximus venenatis augue. Vestibulum venenatis aliquam pretium. Nulla gravida volutpat purus id ultrices. Aenean quam augue, tristique vitae dui quis, varius posuere sem. Morbi diam ex, eleifend id sem vel, venenatis pharetra leo. Vestibulum tincidunt ante vitae arcu semper, at aliquet nulla consectetur. Nunc libero risus, scelerisque pretium leo vitae, lacinia venenatis sem. Sed feugiat magna in arcu auctor dictum. Donec odio tortor, sollicitudin volutpat condimentum varius, porttitor ac lacus. Cras orci erat, convallis quis ex eget, imperdiet vehicula tellus. Pellentesque rhoncus neque at consequat pulvinar. Donec laoreet ornare augue, eget euismod augue laoreet sed. In cursus tincidunt mattis. Fusce mi justo, rhoncus nec elementum ut, ornare sit amet sapien. Maecenas commodo, enim nec suscipit porttitor, turpis massa dapibus ante, ac congue neque arcu non arcu. Proin vel ipsum ut elit vehicula pulvinar. Maecenas quis congue lectus. Nam blandit sagittis varius. Nulla facilisi.Pellentesque sed massa sed risus commodo molestie. Sed a purus ipsum. Aliquam non mauris urna. Curabitur blandit ante non augue imperdiet commodo. Sed eu enim in quam aliquet pharetra nec non velit. Donec at congue purus. Phasellus luctus mattis turpis, ac luctus lectus elementum ac. Suspendisse elementum arcu a leo pharetra, ac sagittis metus elementum. Duis hendrerit varius ex ac vestibulum. Donec suscipit, mi at faucibus aliquet, leo leo tempor lectus, eget maximus neque mauris sit amet purus. Proin feugiat luctus augue, a ullamcorper tortor vulputate vel. Ut condimentum mauris dolor, et rutrum ligula euismod id. Donec sollicitudin sagittis ipsum, rhoncus rhoncus massa maximus quis. Vivamus laoreet rhoncus enim sit amet elementum.";
const lorem = loremString.split(" ");
const $text = document.querySelector("#text");
const $button = document.querySelector("#button");
const $words = document.querySelector("#words");

function copyToClipboard() {
  $text.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  $button.classList.add("-success");
  setTimeout(() => {
    $button.classList.remove("-success");
  }, 1500);
}

function updateText() {
  $text.value = lorem
    .slice(0, $words.value)
    .join(" ");
}

// init
////////////////////////////////////////////////////////////////////////////////
updateText();
