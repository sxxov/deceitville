import pillar_1_bin from './pillar-1.bin?url';
import woods_color_jpg from './woods_color.jpg?url';
import walls_color_jpg from './walls_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior",
		"KHR_materials_emissive_strength"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "Pillar_1.001",
			"rotation": [
				-0.3165544867515564,
				0.6453248262405396,
				-0.30618247389793396,
				0.6241806149482727
			],
			"scale": [
				1.4387116432189941,
				1.4387117624282837,
				1.4387112855911255
			],
			"translation": [
				-44.17320251464844,
				8.042217254638672,
				-7.629810333251953
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.215577971373942,
						0.215577971373942,
						0.215577971373942
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "wooden_color",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		},
		{
			"doubleSided": true,
			"emissiveFactor": [
				1,
				1,
				1
			],
			"emissiveTexture": {
				"index": 1
			},
			"extensions": {
				"KHR_materials_emissive_strength": {
					"emissiveStrength": 4.299999713897705
				},
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.42037705477998155,
						0.42037705477998155,
						0.42037705477998155
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "walls_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 2
				},
				"metallicFactor": 0,
				"roughnessFactor": 0.968181848526001
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.097",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				},
				{
					"attributes": {
						"POSITION": 4,
						"NORMAL": 5,
						"TEXCOORD_0": 6
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 1,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 7,
					"material": 1,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		},
		{
			"sampler": 0,
			"source": 1
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "woods_color",
			"uri": woods_color_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "walls_color",
			"uri": walls_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 208,
			"max": [
				2.1177566051483154,
				1.7082743644714355,
				0.14756374061107635
			],
			"min": [
				-1.1766983270645142,
				-1.691868782043457,
				-0.13962236046791077
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 208,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 208,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 714,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 52,
			"max": [
				0.8192591667175293,
				1.4000400304794312,
				0.17394554615020752
			],
			"min": [
				0.17495697736740112,
				0.8050413131713867,
				-0.21260245144367218
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 52,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 52,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 180,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2095,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 716,
			"byteOffset": 2096
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 2812,
			"uri": pillar_1_bin
		}
	]
}