import tree_4_bin from './tree-4.bin?url';
import environment_col_jpg from './environment_col.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior"
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
			"name": "Tree4.001",
			"rotation": [
				0,
				-0.5392243266105652,
				0,
				0.8421621918678284
			],
			"scale": [
				1.271597981452942,
				1.0891668796539307,
				1.271597981452942
			],
			"translation": [
				74.41740417480469,
				20.650386810302734,
				-1.6462092399597168
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0,
						0,
						0
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Folliages",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cylinder.030",
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
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "environment_col",
			"uri": environment_col_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 408,
			"max": [
				0.715612530708313,
				6.368936538696289,
				0.6101587414741516
			],
			"min": [
				-0.5507187843322754,
				-6.094380855560303,
				-0.5069461464881897
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 408,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 408,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 612,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3440,
			"byteOffset": 0
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
			"byteLength": 3440,
			"uri": tree_4_bin
		}
	]
}